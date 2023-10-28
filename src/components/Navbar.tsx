import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Modal from "./Modal";
import { Button } from "./ui/button";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type User = {
  uuid: string;
  name: string;
  email: string;
  role: "Stakeholder" | "Consultant";
};

const activeUsers: User[] = [
  {
    uuid: "cikq9pdsl0000yf30ck4d7k45",
    name: "John Doe",
    email: "john@example.com",
    role: "Stakeholder",
  },
  {
    uuid: "cikq9pdsl0000yf30ck4d7k46",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Consultant",
  },
  {
    uuid: "cikq9pdsl0000yf30ck4d7k47",
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Stakeholder",
  },
  {
    uuid: "cikq9pdsl0000yf30ck4d7k48",
    name: "Bob Wilson",
    email: "bob@example.com",
    role: "Consultant",
  },
  {
    uuid: "ciy0apbsi0000yf30b7d3l3ym",
    name: "Eva Martinez",
    email: "eva@example.com",
    role: "Stakeholder",
  },
];

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [current, setCurrent] = useState(activeUsers);
  const [email, setEmail] = useState("");
  const [inviteOpen, setInviteOpen] = useState(false);

  const convertToPDF = () => {
    return new Promise<void>((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve();
        }, 3000);
      } catch (e) {
        reject(e);
      }
    });
  };

  const handlePDFDownload = () => {
    setIsLoading(true);
    toast.promise(convertToPDF(), {
      loading: "Saving as PDF...",
      success: () => "File has successfully been saved",
      error: "An unexpected error has occured",
      finally: () => {
        setIsLoading(false);
      },
    });
  };

  const sendInvitation = async () => {
    return new Promise<void>((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve();
        }, 3000);
      } catch (e) {
        reject(e);
      }
    });
  };

  const handleInvitation = () => {
    toast.promise(sendInvitation, {
      loading: "Sending invitation...",
      success: () => {
        setEmail("");
        return "Invitation has been sent";
      },
      error: "Failed to send invitation",
    });
  };

  return (
    <>
      <Modal open={inviteOpen} setOpen={setInviteOpen}>
        <h1 className="pb-4 text-xl font-semibold">Share</h1>
        <div className="flex items-center justify-center space-x-4">
          <Input
            type="email"
            placeholder="Add collaborators"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Button className="px-8" onClick={handleInvitation}>
            Invite
          </Button>
        </div>

        <h1 className="pt-8 text-lg font-semibold">People with access</h1>
        <div className="flex max-h-48 flex-col space-y-2 overflow-y-scroll pt-2">
          {activeUsers
            .sort((a, b) => (a.role < b.role ? -1 : a.role > b.role ? 1 : 0))
            .map((u) => (
              <div className="flex items-center space-x-4" key={u.uuid}>
                <Avatar className="border-2">
                  <AvatarImage src="#" />
                  <AvatarFallback className="text-xs">
                    {u.name.split(" ").map((arr) => arr[0])}
                  </AvatarFallback>
                </Avatar>

                <div className="flex w-full flex-col items-start justify-center">
                  <div className="flex w-full items-center justify-start">
                    <h1 className="w-full max-w-max text-xs text-gray-400">
                      {u.email}
                    </h1>
                    <Badge
                      variant={u.role === "Consultant" ? "default" : "outline"}
                      className="ml-4 scale-90"
                    >
                      {u.role}
                    </Badge>
                  </div>
                  <h1>{u.name}</h1>
                </div>
              </div>
            ))}
        </div>
        <div className="flex w-full justify-end  pt-6">
          <Button variant={"outline"} onClick={() => setInviteOpen(false)}>
            Done
          </Button>
        </div>
      </Modal>
      <div className="flex w-full items-center justify-between space-x-4 lg:justify-end lg:space-x-8">
        <Button
          isLoading={isLoading}
          onClick={handlePDFDownload}
          className="w-40"
          size={"sm"}
          variant={"outline"}
        >
          <div className="flex items-center justify-center space-x-2">
            <h1>Save as PDF</h1>
          </div>
        </Button>

        <div className="flex items-center justify-center space-x-8">
          <div className="flex items-center justify-center transition-all">
            {activeUsers
              .sort((a, b) => (a.role < b.role ? -1 : a.role > b.role ? 1 : 0))
              .slice(0, 3)
              .map((u) => {
                return (
                  <TooltipProvider key={u.uuid}>
                    <Tooltip>
                      <TooltipTrigger>
                        <Avatar
                          className="-mx-1 h-6 w-6 border-2 transition-all"
                          style={{
                            borderColor: `rgb(${Math.ceil(
                              Math.random() * 255,
                            )}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(
                              Math.random() * 255,
                            )})`,
                          }}
                        >
                          <AvatarImage src="#" />
                          <AvatarFallback className="text-xs">
                            {u.name.split(" ").map((arr) => arr[0])}
                          </AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="flex flex-col items-start justify-start">
                          <h1 className="text-xs font-light text-gray-400">
                            {u.role}
                          </h1>
                          <h1 className="">{u.name}</h1>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              })}
            {activeUsers.length > 3 ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar className="-mx-1 h-6 w-6 border-2">
                      <AvatarImage src="#" />
                      <AvatarFallback className="text-xs">
                        +{activeUsers.length - 3}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Others</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {activeUsers.slice(3, activeUsers.length).map((u) => (
                      <DropdownMenuItem key={u.uuid} className="relative">
                        <div className="flex flex-col items-start justify-start">
                          <h1 className="text-xs font-light text-gray-400">
                            {u.role}
                          </h1>
                          <h1 className="">{u.name}</h1>
                          <span className="absolute right-2 top-2 flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                          </span>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <></>
            )}
          </div>

          <Button size={"sm"} onClick={() => setInviteOpen(true)}>
            Invite
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
