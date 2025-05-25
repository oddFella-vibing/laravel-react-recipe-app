<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use 
App\Http\Controllers\MenuController;

Route::get('/', function () {
    return Inertia::render('home');
});
Route::get('/menu',[MenuController::class,'index'] );
Route::get('/singleMeal/{id}',[MenuController::class,'showOne']);