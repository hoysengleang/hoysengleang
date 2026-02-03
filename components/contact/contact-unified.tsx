"use client";

import Link from "next/link";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactUnified() {
    return (
        <Card className="w-full max-w-4xl mx-auto overflow-hidden border-none shadow-2xl bg-card/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Side: Actions */}
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-sm font-medium text-green-700 dark:text-green-400">Available for Opportunities</span>
                        </div>
                        <h3 className="font-heading text-3xl md:text-4xl">Get in Touch</h3>
                        <p className="text-muted-foreground text-lg">
                            Have a project in mind or just want to chat? I&apos;m just a click away.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Expected response time: <span className="font-semibold text-foreground">24-48 hours</span>
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Link href="https://t.me/hoysengleang" target="_blank" className="w-full">
                            <Button className="w-full h-14 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-[#0088cc] hover:bg-[#0077b5]">
                                <Icons.contact className="w-6 h-6 mr-3" />
                                Chat on Telegram
                            </Button>
                        </Link>
                        <Link href="mailto:hoysengleang617@gmail.com" className="w-full">
                            <Button variant="outline" className="w-full h-14 text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border-2">
                                <Icons.gmail className="w-6 h-6 mr-3" />
                                Send Email
                            </Button>
                        </Link>
                        <Link href="/resume" className="w-full">
                            <Button variant="secondary" className="w-full h-14 text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border-2">
                                <Icons.page className="w-6 h-6 mr-3" />
                                Download Resume
                            </Button>
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="pt-4 border-t border-border/50">
                        <p className="text-sm text-muted-foreground mb-3">Connect with me:</p>
                        <div className="flex gap-3">
                            <Link href="https://github.com/hoysengleang" target="_blank">
                                <Button size="icon" variant="ghost" className="h-12 w-12 rounded-full hover:bg-primary/10">
                                    <Icons.gitHub className="w-6 h-6" />
                                </Button>
                            </Link>
                            <Link href="https://linkedin.com/in/hoysengleang" target="_blank">
                                <Button size="icon" variant="ghost" className="h-12 w-12 rounded-full hover:bg-primary/10">
                                    <Icons.linkedin className="w-6 h-6" />
                                </Button>
                            </Link>
                            <Link href="https://t.me/hoysengleang" target="_blank">
                                <Button size="icon" variant="ghost" className="h-12 w-12 rounded-full hover:bg-primary/10">
                                    <Icons.contact className="w-6 h-6" />
                                </Button>
                            </Link>
                            <Link href="mailto:hoysengleang617@gmail.com">
                                <Button size="icon" variant="ghost" className="h-12 w-12 rounded-full hover:bg-primary/10">
                                    <Icons.gmail className="w-6 h-6" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Side: Info */}
                <div className="p-8 md:p-12 flex flex-col justify-center bg-card">
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <Icons.contact className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm text-muted-foreground">Telegram / Phone</p>
                                        <p className="text-base font-medium">+855 784-197-60</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <Icons.gmail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm text-muted-foreground">Email</p>
                                        <a href="mailto:hoysengleang617@gmail.com" className="text-base font-medium hover:underline hover:text-primary transition-colors">
                                            hoysengleang617@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <Icons.gitOrgBuilding className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm text-muted-foreground">Address</p>
                                        <p className="text-base font-medium">Kol village, sangkat KunTok, Khan KomBol, Phnom Penh</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <Icons.globe className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm text-muted-foreground">Website</p>
                                        <a href="https://hoysengleang.vercel.app" target="_blank" className="text-base font-medium hover:underline hover:text-primary transition-colors">
                                            hoysengleang.vercel.app
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
