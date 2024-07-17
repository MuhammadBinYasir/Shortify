import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ImLink } from "react-icons/im";
import { MdOutlineQrCode2 } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";


export default function Layout({
    url,
    barcode,
    children,
}: Readonly<{
    url: React.ReactNode,
    barcode: React.ReactNode,
    children: React.ReactNode,
}>) {
    return (
        <>
            {children}
            <Tabs defaultValue="url" className="w-full">
                <TabsList className="grid w-[400px] mx-auto grid-cols-2">
                    <TabsTrigger value="url"><ImLink /> URL</TabsTrigger>
                    <TabsTrigger value="barcode"><MdOutlineQrCode2 /> Barcode <div className='ml-auto'><IoLockClosedOutline /></div> </TabsTrigger>
                </TabsList>
                <TabsContent value="url">
                    {url}
                </TabsContent>
                <TabsContent value="barcode">
                    {barcode}
                </TabsContent>
            </Tabs>
        </>
    );
}
