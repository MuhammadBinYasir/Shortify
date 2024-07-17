"use client"
import React, { useEffect, useState } from 'react'
import { z } from 'zod'
import { FaCrown } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { formSchema } from '@/validation/creating'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from '@hookform/resolvers/zod'
import { generateRandomNumber } from '@/function/generateRandom'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import {
    SheetClose,
    SheetFooter,
} from "@/components/ui/sheet"
import { Loader2 } from 'lucide-react'
import { Select, SelectContent, SelectTrigger, SelectValue } from '../ui/select'
import { SelectItem } from '@radix-ui/react-select'




const CreateURL = () => {

    const { toast } = useToast()
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            current_url: "",
            shorten_url: "147258369",
        },
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoading(true)
        const res = await fetch("/api/url/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                values
            }),
        });
        if (res.status == 200) {
            toast({
                title: "Oh! You are done.",
                description: "We've created a working shorten link for you.",
                action: <ToastAction altText="Try again">View Analytics</ToastAction>,
            });
        }
        setLoading(false)
    }

    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="my-4 flex flex-col gap-3">

                    <FormField
                        control={form.control}
                        name="current_url"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>URL to shorten</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="my-2">
                        <div className="flex flex-col sm:flex-row gap-2">
                            <div>
                                <FormLabel>Domain Name</FormLabel>
                                <div className='text-sm bg-slate-50 text-slate-700 h-10 rounded flex items-center justify-center px-3'>https://myurl.co/</div>
                            </div>
                            <div className='w-full'>
                                <FormField
                                    control={form.control}
                                    name="shorten_url"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Domain Path</FormLabel>
                                            <FormControl>
                                                <Input {...field} value={'147258369'} disabled />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <FormDescription className='flex items-center gap-3 mt-1'><FaCrown /> Subscribe to pro to Edit Shorten url</FormDescription>
                    </div>


                </div>

                <SheetFooter>
                    <SheetClose asChild>
                        <button className='bg-slate-50 px-5 py-2 text-sm rounded text-slate-700'>Cancel</button>
                    </SheetClose>
                    {loading ? (
                        // If loading -- true
                        <button type='button' className='bg-slate-100 px-5 py-2 text-sm rounded text-slate-500 flex items-center' disabled>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </button>
                    ) : (
                        // If Loaded -- false
                        <button type='submit' className='bg-slate-700 px-5 py-2 text-sm rounded text-slate-50'>Submit</button>
                    )}
                </SheetFooter>
            </form>

        </Form>

    )
}

export default CreateURL