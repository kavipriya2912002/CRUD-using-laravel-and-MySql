<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\detail;

class detailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $details = detail::all();
        return response(['data'=>$details],200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->only(['title','body','age']);
        detail::create($data);
        return response(['message'=>'Post Created Successfully'],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
{
    $details = detail::find($id);

    if(!$details) {
        return response(['message' => 'Post not found'], 404);
    }

    return response(['data' => $details], 200);
}

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $details = detail::find($id);
    
        if (!$details) {
            return response(['message' => 'Post not found'], 404);
        }
    
        $data = $request->only(['title', 'body', 'age']);
        $details->update($data);
    
        return response(['message' => 'Post Updated Successfully'], 200);
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
{
    $details = detail::find($id);

    if (!$details) {
        return response(['message' => 'Post not found'], 404);
    }

    $details->delete();

    return response(['message' => 'Post deleted successfully'], 200);
}

}
