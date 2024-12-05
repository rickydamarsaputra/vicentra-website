<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TermsAndConditionsController extends Controller
{
    public function index()
    {
        return Inertia::render('Pages/TermsAndConditions/Index');
    }
}
