import Header from '@/components/ui/header'
import React from 'react'
import { DataTable } from './data-table'
import { Estimation, columns } from './columns'

async function getData(): Promise<Estimation[]> {
    return [
        {
            id: "1",
            name: 'Test',
            backend: "Node js",
            frontend: "React",
            domain: "Test",
            file: "test_file.xlxs"
        },
        {
            id: "2",
            name: 'Aimagery',
            backend: "Python",
            frontend: "Next js",
            domain: "AI",
            file: "aimagery.xlxs"
        },
        {
            id: "3",
            name: 'Grow Finance',
            backend: "Node js",
            frontend: "Angular",
            domain: "Finance",
            file: "grow.xlxs"
        }        
    ]
}

const ListPage = async() => {
    const data = await getData()
    return (
        <div>
            <Header header="Estimation List" />
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    )
}

export default ListPage