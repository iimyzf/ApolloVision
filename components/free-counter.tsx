"use client";

import { use, useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNT } from "@/constants";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { useProModule } from "@/hooks/use-pro-module";

interface FreeCounterProps {
    apiLimitCount: number;
    isPro: boolean;
}

const FreeCounter = ({
    apiLimitCount = 0,
    isPro = false,
}: FreeCounterProps) => {
    const proModal = useProModule();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    if (isPro) return null;

    return (
        <div className="px-3">
            <Card className="bg-white/10 border-0">
                <CardContent className="py-6">
                    <div className="text-center text-sm text-white mb-4 space-y-2">
                        <p>
                            {apiLimitCount} / {MAX_FREE_COUNT} Free Generations
                        </p>
                        <Progress
                            className="h-3"
                            value={(apiLimitCount / MAX_FREE_COUNT) * 100}
                        ></Progress>
                    </div>
                    <Button
                        className="w-full"
                        variant="pro"
                        onClick={proModal.onOpen}
                    >
                        Upgrade <Zap className="w-4 h-4 ml-2 fill-white" />{" "}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default FreeCounter;
