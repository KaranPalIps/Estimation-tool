import Header from '@/components/ui/header'
import React from 'react'
import { DataTable } from './data-table'
import { Estimation, columns } from './columns'

async function getData(): Promise<Estimation[]> {
    return [
        {
            id: "1",
            name: 'Estimation for Xyz',
        },
        {
            id: "2",
            name: 'Estimations for Local Model Project',
        },
        {
            id: "3",
            name: 'Esimation for Lawyer firm',
        }        
    ]
}

const SavedEstimation = async() => {
    const data = await getData()
  return (
    <div>
         <Header header="Saved Estimations"/>
         <div className="container mx-auto py-10">
                <DataTable columns={columns} data={data} />
            </div>
    </div>
  )
}

export default SavedEstimation