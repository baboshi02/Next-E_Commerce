import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { MoonIcon } from "lucide-react"

export function SwitchDemo() {
  return (
    <div className="flex  items-center space-x-2 text-white">
      <Label htmlFor="airplane-mode"><MoonIcon className=" h-5 w-5 text-thirdColor" /></Label>
      <Switch id="airplane-mode" className="bg-gray-50 border-primaryColor" />
    </div>
  )
}
