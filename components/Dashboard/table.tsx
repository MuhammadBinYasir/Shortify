import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Link from 'next/link'

type dataType = {
    id: string,
    original_url: string,
    shorten_url: string,
    counted_clicks: number,
}
type prop = {
    data: dataType[]
}

const TableComp = ({ data }: prop) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Shorten Url</TableHead>
                    <TableHead>Original URL</TableHead>
                    <TableHead>Counted Click</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((data:any) => (
                    <TableRow key={data.id}>
                        <TableCell className="font-medium">{data.shorten_url}</TableCell>
                        <TableCell>{data.original_url}</TableCell>
                        <TableCell>{data.counted_clicks}</TableCell>
                        <TableCell><Link href={`/shorten/${data.id}`} >View Analytics</Link></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default TableComp