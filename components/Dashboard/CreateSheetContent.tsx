import CreateURL from "../Forms/CreateURL"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet"

export const CreateSheetContent = () => {
    return (
        <SheetContent>
        <SheetHeader>
            <SheetTitle>Create Shorten URL</SheetTitle>
            <SheetDescription>
                Create a New Shorten URL here. Click submit when you're done.
            </SheetDescription>
        </SheetHeader>

        <CreateURL />

    </SheetContent>
    )
}