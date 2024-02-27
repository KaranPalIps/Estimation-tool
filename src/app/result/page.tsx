import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const SearchResult = () => {
    return (
        <div className='main-background flex justify-center items-center h-[100%]'>
            <Card className='w-1/2'>
            <CardHeader>
                Result
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Module 1</AccordionTrigger>
                        <AccordionContent>
                            Predicted Module result 1 
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Module 2</AccordionTrigger>
                        <AccordionContent>
                        Predicted Module result 2
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Module 3</AccordionTrigger>
                        <AccordionContent>
                        Predicted Module result 3
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
        </div>
    )
}

export default SearchResult