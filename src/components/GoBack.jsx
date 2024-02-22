import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';

const GoBack = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleGoBackClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        // atualiza o estado com base na posição de rolagem
        setIsVisible(window.scrollY > 100);
    };

    useEffect(() => {
        // adiciona um ouvinte de evento de rolagem ao montar o componente
        window.addEventListener('scroll', handleScroll);

        // remove o ouvinte de evento ao desmontar o componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed bottom-4 right-4 z-10 ${isVisible ? 'opacity-100' : 'opacity-0 hidden'}`} transition-all duration-300 ease-in-out>
            <Button icon="pi pi-arrow-up" rounded raised className='bg-white' onClick={handleGoBackClick} />
        </div>
    );
}

export default GoBack;
