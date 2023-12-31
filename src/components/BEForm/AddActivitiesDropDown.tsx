import React, { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  FileEdit,
  KanbanSquare,
  Link,
  PlusCircle,
  StickyNote,
  Workflow,
} from "lucide-react";
import Modal from "@/components/Modal";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
type Props = {};

const ACTIVITIES_ICON_STYLE = "mr-2 h-4 w-4";

const AddActivitiesButton = (props: Props) => {
  const [openLinksModal, setOpenLinksModal] = useState(false);
  const [open, setOpen] = React.useState(false);
  const FormSchema = z.object({
    name: z.string().min(1, "Please enter a valid name"),
    link: z.string().url("Please enter a valid URL"),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      link: "",
    },
  });

  const handleSaveLink = (data: z.infer<typeof FormSchema>) => {
    form.reset();
    setOpenLinksModal(false);
  };

  return (
    <>
          <Modal open={open} setOpen={setOpen}>
        <div className="relative">
          <h1 className="text-center text-2xl">Start a new activity</h1>
          <div className="p-10"><p className="font-semibold">Please press the start to start a new a activity</p></div>
          <Button
            className="bottom-0 right-0 "
            onClick={() => {
              toast("Event has been created", {
                action: {
                  label: "Join Activity",
                  onClick: () => console.log("Undo"),
                },
              });
              setOpen(false);
            }}
          >
            Start
          </Button>
        </div>
      </Modal>
      <Modal open={openLinksModal} setOpen={setOpenLinksModal}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSaveLink)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex">
                    <FileEdit className={ACTIVITIES_ICON_STYLE} />
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Presentation" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter a relevant Name (e.g., Presentation slides).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex">
                    <Link className={ACTIVITIES_ICON_STYLE} />
                    Link
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="https://www.fake.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter a relevant URL (e.g., https://www.example.com).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit">Save Link</Button>
            </div>
          </form>
        </Form>
      </Modal>

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="hover:cursor-pointer">
          <PlusCircle className="h-5 w-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Activities</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {/* Post-It */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <StickyNote className={ACTIVITIES_ICON_STYLE} />
              <span>Post-It</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => setOpen(true)}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>Add Post-It</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <StickyNote className={ACTIVITIES_ICON_STYLE} />
                  <span>Post-It Version 1</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <StickyNote className={ACTIVITIES_ICON_STYLE} />
                  <span>Post-It Version 2</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          {/* Kanban */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <KanbanSquare className={ACTIVITIES_ICON_STYLE} />
              <span>Kanban</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => setOpen(true)}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>Add Kanban</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <KanbanSquare className={ACTIVITIES_ICON_STYLE} />
                  <span>Kanban Version 1</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <KanbanSquare className={ACTIVITIES_ICON_STYLE} />
                  <span>Kanban Version 2</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          {/* Flowchart */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Workflow className={ACTIVITIES_ICON_STYLE} />
              <span>Flowchart</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => setOpen(true)}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>Add Flowchart</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Workflow className={ACTIVITIES_ICON_STYLE} />
                  <span>Kanban Version 1</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Workflow className={ACTIVITIES_ICON_STYLE} />
                  <span>Kanban Version 2</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          {/* Links */}
          <DropdownMenuItem onClick={() => setOpenLinksModal(true)}>
            <Link className={ACTIVITIES_ICON_STYLE} />
            <span>Links</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default AddActivitiesButton;
