"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/common/icons";

export default function ContactInfoCard() {
    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                    <Icons.contact className="w-5 h-5 text-muted-foreground" />
                    <span>+855 784-197-60 (Telegram)</span>
                </div>
                <div className="flex items-center space-x-3">
                    <Icons.gmail className="w-5 h-5 text-muted-foreground" />
                    <a href="mailto:hoysengleang617@gmail.com" className="hover:underline">
                        hoysengleang617@gmail.com
                    </a>
                </div>
                <div className="flex items-start space-x-3">
                    <Icons.gitOrgBuilding className="w-5 h-5 text-muted-foreground mt-1" />
                    <span>Kol village, sangkat KunTok, Khan KomBol, Phnom Penh</span>
                </div>
                <div className="flex items-center space-x-3">
                    <Icons.globe className="w-5 h-5 text-muted-foreground" />
                    <a href="https://hoysengleang.vercel.app" target="_blank" className="hover:underline">
                        https://hoysengleang.vercel.app
                    </a>
                </div>
            </CardContent>
        </Card>
    );
}
