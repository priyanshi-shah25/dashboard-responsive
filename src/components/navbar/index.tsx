import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useIsMobile } from "@/hooks/use-mobile"
import { Link } from "@radix-ui/react-navigation-menu"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Menu, X } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useState } from "react"
import { cn } from "@/lib/utils"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function Navbar() {
  const isMobile = useIsMobile()
  const [open, setOpen] = useState(false)

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full bg-background block">
      
      <div className="flex items-center w-full h-16 px-2 border-b">
        <CollapsibleTrigger className="md:hidden p-2 rounded-md hover:bg-accent ">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </CollapsibleTrigger>
        
        <div className="hidden md:flex w-full items-center">
          <NavigationMenu viewport={isMobile} className="justify-start max-w-full">
            
            <NavigationMenuList>              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] p-4">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 text-lg font-medium">shadcn/ui</div>
                          <p className="text-sm">
                            Beautifully designed components built with Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">Re-usable components built using Radix UI.</ListItem>
                    <ListItem href="/docs/installation" title="Installation">How to install dependencies.</ListItem>
                    <ListItem href="/docs/primitives/typography" title="Typography">Styles for headings, paragraphs, lists...etc</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 px-3 text-sm">Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem key={component.title} title={component.title} href={component.href}>
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "h-9 px-3 text-sm")}>
                  <Link href="/docs">Docs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 px-3 text-sm">List</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    <ListItem href="#" title="Components">Browse all components.</ListItem>
                    <ListItem href="#" title="Documentation">Learn how to use.</ListItem>
                    <ListItem href="#" title="Blog">Read our latest blog.</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 px-3 text-sm">Simple</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    <ListItem href="#" title="Components" />
                    <ListItem href="#" title="Documentation" />
                    <ListItem href="#" title="Blocks" />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 px-3 text-sm">With Icon</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                     <li className="flex items-center gap-2 p-1">
                        <CircleHelpIcon className="w-4 h-4" /> <Link href="#" className="hover:underline">Backlog</Link>
                     </li>
                     <li className="flex items-center gap-2 p-1">
                        <CircleIcon className="w-4 h-4" /> <Link href="#" className="hover:underline">To Do</Link>
                     </li>
                     <li className="flex items-center gap-2 p-1">
                        <CircleCheckIcon className="w-4 h-4" /> <Link href="#" className="hover:underline">Done</Link>
                     </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

        <CollapsibleContent className="md:hidden fixed left-0 top-16 w-full h-[calc(100vh-4rem)] bg-blue-50 animate-in slide-in-from-top-2 last:border-0">
        <div className="flex flex-col p-4 gap-4">
          <a href="/" className="text-xl hover:underline">Home</a>
          <a href="/docs" className="text-xl hover:underline">Components</a>
          <a href="/docs" className="text-xl hover:underline">Docs</a>
          <a href="/docs" className="text-xl hover:underline">List</a>
          <a href="/docs" className="text-xl hover:underline">Simple</a>
          <a href="/docs" className="text-xl hover:underline">With Icon</a>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block space-y-1 rounded-md p-3 no-underline outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && <p className="text-sm  mt-1">{children}</p>}
        </Link>
      </NavigationMenuLink>
    </li>
  )
}