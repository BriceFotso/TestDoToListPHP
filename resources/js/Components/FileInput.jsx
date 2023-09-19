import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function FileInput({ className = '', isFocused = false, onChange, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]; // Récupérer le fichier sélectionné

        if (selectedFile) {
            // Vérifier la taille du fichier (en octets)
            const maxSizeBytes = 5 * 1024 * 1024; // 5 Mo en octets
            if (selectedFile.size <= maxSizeBytes) {
                // La taille du fichier est inférieure ou égale à 5 Mo
                if (onChange) {
                    onChange(selectedFile); // Appeler la fonction de rappel avec le fichier sélectionné
                }
            } else {
                // La taille du fichier dépasse la limite
                alert('Le fichier est trop volumineux. La limite est de 5 Mo.');
                // Réinitialiser l'entrée de fichier
                input.current.value = null;
            }
        }
    };

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type="file" // Utiliser le type "file" pour permettre de sélectionner des fichiers
                className={
                    'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                    'max-w-xs h-auto max-h-48 p-2' + // Limiter la largeur et la hauteur de l'élément
                    className
                }
                ref={input}
                onChange={handleFileChange} // Appeler la fonction handleFileChange lorsqu'un fichier est sélectionné
                accept="image/*" // Limiter les types de fichiers acceptés aux images
            />
        </div>
    );
});