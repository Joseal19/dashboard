
import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { Avatar } from 'primereact/avatar';  

export default function BasicDemo() {
    const items = [
        {
            label: 'Graficos',
            icon: 'pi pi-chart-bar',
            url: '#graficos',
            id: 1
        },
        {
            label: 'Produtos',
            icon: 'pi pi-shopping-bag',
            url: '#produtos',
            id: 2
        },
    ];
    const end = (
        <div className="flex align-items-center gap-2">
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
        </div>
    );

    return (
        <div className="card w-full h-full">
            <Menubar model={items} end={end}/>
        </div>
    )
}
        