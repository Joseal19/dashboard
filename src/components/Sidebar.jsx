
import React from 'react'; 
import { Menubar } from 'primereact/menubar';

export default function BasicDemo() {
    const items = [
        {
            label: 'Produtos',
            icon: 'pi pi-shopping-bag',
            url: '#produtos',
            id: 2
        },
    ];
    const end = (
        <div className="flex align-items-center gap-2">
        </div>
    );

    return (
        <div className="card w-full h-full">
            <Menubar model={items} end={end}/>
        </div>
    )
}
        