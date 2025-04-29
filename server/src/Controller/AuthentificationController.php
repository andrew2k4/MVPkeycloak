<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

final class AuthentificationController extends AbstractController
{
    #[Route('/films', name: 'login')]
    public function login(Request $request): JsonResponse
    {   
        $isAuth = $this->AuthMiddleware($request);


        if(!$isAuth){
            return $this->json(["error" => "No valid access Token"]);
        }

        $film1 = new Film(1, "game of throne", "", "the best film in the world");
        $film2 = new Film(1, "game of throne", "", "the best film in the world");
        $film3 = new Film(1, "game of throne", "", "the best film in the world");
        $film4 = new Film(1, "game of throne", "", "the best film in the world");

        return $this->json([$film1, $film2, $film3, $film4]);
    }

   


    private function AuthMiddleware(Request $request){
        $authorizationHeaders = $request->headers->get("Authorization");

        if(!$authorizationHeaders || ! preg_match('/Bearer\s(\S+)/',$authorizationHeaders,$matches)){
            return false;
        }

        $jwt = $matches[1];

        $client = HttpClient::create();

        $response = $client->request('POST', 'http://localhost:8080/realms/andrew-backend/protocol/openid-connect/userinfo' , ["headers" => [
            "Authorization" => $authorizationHeaders
        ]]);
       return true;
    }

}
