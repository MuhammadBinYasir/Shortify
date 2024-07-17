"use client"

import { z } from "zod"

export const formSchema = z.object({
  current_url: z.string().url({
    message: "Please enter a valid URL"
  }).min(0, {
    message: "It is a required field"
  }),
  shorten_url: z.string().min(3, {
    message: "Shorten URL should be minimum 3 character long."
  }).max(100, {
    message: "Shorten URL should be maximum 10 character long."
  }),
  root_url: z.string({
    required_error: 'Please Select a shorten domain.'
  })

})