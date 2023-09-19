<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['string', 'max:255'],
            'email' => ['email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
            'image' => [
                'nullable', // L'image est facultative
                'image', // Vérifiez si le champ est une image
                'mimes:jpeg,jpg,png,gif', // Formats d'image acceptés
                'max:5120', // Taille maximale du fichier en kilo-octets (5 Mo)
            ],
        ];
    }
}
