import React from 'react'

export default function RootLayout({
    anal,
    children
}: {
    anal: React.ReactNode,
    children: React.ReactNode
})
 {
    return (
        <>
            {children}
            {anal}
        </>
    )
}