<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    //;

    public function index(){
        $mealres=Http::get('www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
        
        return Inertia::render('Menu',[
          'meallist'=>  $mealres['meals']
        ]);
    }

    public function showOne($id){
      
     
      $singleres=Http::get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=$id");
      
      return Inertia::render('MealDetail',[
        'mealDetails'=>$singleres['meals']
      ]);
    }
}
