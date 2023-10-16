import React from 'react';
import {useEffect, useRef, useState} from 'react';

//Para usarlo hay que importarlo y desestructurar las constantes: elementoRef y isIntersecting.
//Al importarlo y usarlo, tambien hay que pasarle el objeto "opciones" necesaria para la API de IntersectionObserver. Ver docu. 

function ComponenteObservador (opciones={}) {

    const elementoRef = useRef();    
    const [isIntersecting, setIsIntersecting] = useState (false);

    useEffect(() => {

        const elemento =  elementoRef.current;

        const observer = new IntersectionObserver(
            entries => {entries.forEach(entry => {
               setIsIntersecting(entry.isIntersecting);
            });
        }, opciones);

        if (elemento){
            observer.observe(elemento);
        }

        return () => {
            if (elemento) {
                observer.unobserve(elemento);
            }
        }

    }, [opciones]);

    return [elementoRef, isIntersecting];   
}

export default ComponenteObservador 