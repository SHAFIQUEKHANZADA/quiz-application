"use client"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import Nav from "@/components/nav"
import { useRouter } from "next/navigation"
const chartData = [
    { month: "Week 1", desktop: 20, mobile: 80 },
    { month: "Week 2", desktop: 200, mobile: 200 },
    { month: "Week 3", desktop: 167, mobile: 120 },
    { month: "Week 4", desktop: 310, mobile: 190 },
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
    const router = useRouter();  

    const handleContinueClick = () => {
        router.push("/selling-page");
    };
    return (
        <div className="flex flex-col gap-10">
            <Nav />
            <Card className="border-none shadow-none p-0 m-0">
                <CardHeader>
                    <CardTitle>Your readiness level</CardTitle>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <LineChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                top: 20,
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => value}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="line" />}
                            />
                            <Line
                                dataKey="desktop"
                                type="natural"
                                stroke="var(--color-desktop)"
                                strokeWidth={8}
                                dot={{
                                    fill: "var(--color-desktop)",
                                }}
                                activeDot={{
                                    r: 6,
                                }}
                            >
                                <LabelList
                                    position="top"
                                    offset={12}
                                    className="fill-foreground"
                                    fontSize={12}
                                />
                            </Line>
                        </LineChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2 text-sm text-gray-500">
                    <h1>This chart is for illustrative purposes only</h1>
                </CardFooter>
            </Card>

            <div className="space-y-5 flex flex-col gap-4">
                <h1 className="text-[24px] font-bold">Your 4-week AI-Driven Income Growth Challenge is ready!</h1>

                
                    <button
                        onClick={handleContinueClick}
                        type="submit"
                        className="mt-4 w-full py-4 text-[16px] bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        CONTINUE
                    </button>
            </div>
        </div>
    )
}
