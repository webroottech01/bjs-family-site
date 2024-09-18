<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Contact;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactUs;

class ContactController extends Controller
{
    public function __construct(Request $request){
        $request->headers->set("Accept", "application/json");
    }

    public function contact(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'company_name' => 'required|string',
            'phone_no' => 'required', //, 'regex:/^(\+?[0-9\s\-\(\)]*)$/'
            'email' => 'required|email',
            'zipcode' => 'required|string',
            'service' => 'required|string',
            'product' => 'required|string',
            'weekly_volume' => 'required'
        ]);

        $contact = new Contact;
        $contact->name = $request->input('name');
        $contact->company_name = $request->input('company_name');
        $contact->phone_no = $request->input('phone_no');
        $contact->email = $request->input('email');
        $contact->zipcode = $request->input('zipcode');
        $contact->service = $request->input('service');
        $contact->product = $request->input('product');
        $contact->weekly_volume = $request->input('weekly_volume');

        if($contact->save()){
            Mail::to("info@bjs-beyond.com")->send(new ContactUs($request));
            return response()->json([
                'message' => 'Form Submitted successfully'
            ], 200);
        }

    }
}
