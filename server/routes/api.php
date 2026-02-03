<?php

use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [UserController::class,'login']);
Route::post('/register', [UserController::class,'register']);

Route::post('/createTask', [TaskController::class, 'createTask']);
Route::get('/getTasks', [TaskController::class, 'getTasks']);
Route::put('/updateTask/{id}', [TaskController::class, 'updateTask']);
Route::delete('/deleteTask/{id}', [TaskController::class, 'deleteTask']);
// Route::middleware('auth:sanctum')->group(function () {
// 	Route::post('/createTask', [TaskController::class, 'createTask']);
// 	Route::get('/getTasks', [TaskController::class, 'getTasks']);
// 	Route::put('/updateTask/{id}', [TaskController::class, 'updateTask']);
// });