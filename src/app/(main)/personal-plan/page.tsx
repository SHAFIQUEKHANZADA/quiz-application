"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import Nav from "@/components/nav"
import Link from "next/link"
const chartData = [
    { month: "December", desktop: 73, mobile: 190 }, 
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
   
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export default function Component() {
    return (
        <div>
            <Nav />
            <div className="flex flex-col text-center gap-4 py-4">
                <h1 className="text-[24px] font-bold">Your Personal AI-Driven Income Growth Challenge</h1>
                <p className="text-gray-500">Based on your answers, we expect you to gain necessary skills of</p>

                <p className="underline text-[18px] font-semibold">AI Master by Feb, 2025</p>

                <p className="py-[2px] px-[10px] rounded text-[15px] bg-[#F1F1F1] w-fit mx-auto">Your goal: <span className="font-bold">Vacation</span></p>
            </div>
            <Card>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="dashed" />}
                            />
                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                            {/* <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} /> */}
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>

            <div className='bg-white py-5'>
                <Link href={"/magic-page"}>
                    <button className='text-[17px] py-4 rounded-[10px] font-bold w-full bg-[#5653FE] text-white'>CONTINUE</button>
                </Link>
            </div>
        </div>
    )
}
