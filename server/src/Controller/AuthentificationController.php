<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

final class AuthentificationController extends AbstractController
{
    #[Route('/login', name: 'login')]
    public function login(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(),true);
        $email = $data['email'];
        $password = $data['password'];


        $client = HttpClient::create();

        $jsonArray = ['grant_type'=>'password','client_id'=>'public-client','scope'=>'email openid','username' => $email,'password'=>$password];
        $requestBody = http_build_query($jsonArray);
        echo $email;
        $response = $client->request('POST','http://localhost:8080/realms/andrew-backend/protocol/openid-connect/token',['headers' => [
'Content-Type' => 'application/x-www-form-urlencoded'
        ],  'body'=>$requestBody]);

        return $this->json($response->toArray());
    }

    #[Route('/registration', name: 'registration')]
    public function registration(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(),true);
        $email = $data['email'];
        $firstName = $data['firstname'];
        $lastName = $data['lastname'];
        $password = $data['password'];
        
        $client = HttpClient::create();

        $bodyRequest = [
            'firstName'=>$firstName,
            'lastName'=>$lastName,
            'email' => $email, 
            "enabled" => true, 
            "requiredActions" => [
                                    "VERIFY_EMAIL"
                                ],
            "credentials" => [
                                [ 
                                    "type"=> "password",
                                    "value"=>$password,
                                    "temporary"=> false
                                ]    
                            ]
        ];

        $response = $client->request("POST","http://localhost:8080/admin/realms/andrew-backend/users", ['headers' =>[
        "Authorization" => "Bearer " . $this->getKeycloakRealAccessToken()
        ], "json" => $bodyRequest ] );


        // check if the user is in a institution
        if(str_contains($email, "@gmail") && !$this->groupExist("gmail")){
            return $this->json([
                'message' => 'The User will be created',
            ]);
        }

        if (!($response->getStatusCode()>= 200 && $response->getStatusCode() <= 300)){
            return $this->json([
                'message' => 'The User will be not created',
                'status' => $response->getStatusCode(),
                'error' => $response->toArray()
            ]); 
        }


    

        return $this->json([
            'message' => 'The User will be created',
        ]);
    }

    private function getKeycloakRealAccessToken(): string{
        
        $client = HttpClient::create();

        $jsonArray = ['grant_type'=>'client_credentials','client_id'=>'admin-cli','client_secret'=>'zY2TytKATTbXhlYq7pahfpeeb3PfPnj4'];
        $requestBody = http_build_query($jsonArray);
        $response = $client->request('POST','http://localhost:8080/realms/andrew-backend/protocol/openid-connect/token',['headers' => [
'Content-Type' => 'application/x-www-form-urlencoded'
        ],  'body'=>$requestBody]);
        
        return $response->toArray()["access_token"];
    }

    private function groupExist($groupName): bool{
        return false;
    }


    private function addUserToAGroup(): void{
        $client = HttpClient::create();

        $response = $client->request('POST','http://localhost:8080/realms/andrew-backend/groups',['headers' => [
'Authorization' => 'Bearer ' . $this->getKeycloakRealAccessToken()
        ]]);
        
        return;
    }

}
