"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Link,
  Paperclip,
  Maximize2,
} from "lucide-react";

export function ConsultationReportContent() {
  const [reportContent, setReportContent] =
    useState(`You don't need to have a full time ecommerce business to earn a little extra money through your website. You don't even need to be there all the time. All you need to do is wait for the day your advertisers will pay you.

However, this is not as easy as it seems. You can't expect to just make a website and watch the money roll in. You have to exert first the effort to make the site popular and produce a huge traffic flow. Advertisers would only post their banners and ads on sites where they know there are many people who will see them. The more traffic and visitors you have the likely the chance that advertisers will want their ads on your site. You can also have pay-per-click advertising in your site. As each visitor clicks on an ad, the advertiser will pay you for those redirects. Google's Adsense and Yahoo's Search marketing are some of those that offer this performance based marketing strategies.

They can provide a way to make money online by simply placing ads on your site. These ads are also links to the sites of the advertisers. The advertisers pay Google and Yahoo for every clicks done to their links and in return you get paid by these search engines if those clicks were done on your site. The best way to make a better profit is to ensure that there are lots of people who will click on those links. Make sure that your site gets many visitors by making your site informative as well as entertaining. Your site must concentrate on a certain niche so that you can laser-target your market.`);

  return (
    <div className="space-y-6">
      {/* Patient Info Header */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face" />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Mokhtar Amine Ghannouchi
              </h2>
              <p className="text-gray-500 text-sm">#P-00016</p>
              <div className="flex items-center space-x-2 mt-2">
                <Badge className="bg-pink-500 hover:bg-pink-500 text-white px-3 py-1 rounded-full text-xs">
                  ♂ Male
                </Badge>
                <Badge className="bg-pink-500 hover:bg-pink-500 text-white px-3 py-1 rounded-full text-xs">
                  23 years
                </Badge>
              </div>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-10 h-10 rounded-full border-blue-500 text-blue-500 hover:bg-blue-50 p-0"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Rich Text Editor */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-gray-50 overflow-hidden">
        {/* Toolbar */}
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-center space-x-1">
            {/* Text Formatting */}
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-gray-100"
            >
              <Bold className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-gray-100"
            >
              <Italic className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-gray-100"
            >
              <Underline className="w-4 h-4" />
            </Button>

            {/* Separator */}
            <div className="w-px h-6 bg-gray-300 mx-2"></div>

            {/* Headings */}
            <Button
              variant="ghost"
              size="sm"
              className="px-2 h-8 text-sm hover:bg-gray-100"
            >
              H1
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="px-2 h-8 text-sm hover:bg-gray-100"
            >
              H2
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="px-2 h-8 text-sm hover:bg-gray-100"
            >
              H3
            </Button>

            {/* Separator */}
            <div className="w-px h-6 bg-gray-300 mx-2"></div>

            {/* Links and Attachments */}
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-gray-100"
            >
              <Link className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-gray-100"
            >
              <Paperclip className="w-4 h-4" />
            </Button>

            {/* Separator */}
            <div className="w-px h-6 bg-gray-300 mx-2"></div>

            {/* Alignment */}
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-gray-100"
            >
              <AlignLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-gray-100"
            >
              <AlignCenter className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-gray-100"
            >
              <AlignRight className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-gray-100"
            >
              <AlignJustify className="w-4 h-4" />
            </Button>

            {/* Separator */}
            <div className="w-px h-6 bg-gray-300 mx-2"></div>

            {/* Lists */}
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-gray-100"
            >
              <List className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-gray-100"
            >
              <ListOrdered className="w-4 h-4" />
            </Button>

            {/* Spacer */}
            <div className="flex-1"></div>

            {/* Maximize */}
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-gray-100"
            >
              <Maximize2 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Editor Content */}
        <div className="p-6">
          <div
            className="min-h-[400px] text-gray-700 leading-relaxed text-sm focus:outline-none"
            contentEditable
            suppressContentEditableWarning={true}
            style={{ whiteSpace: "pre-wrap" }}
          >
            {reportContent}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <Button
          variant="outline"
          className="bg-white border-gray-200 hover:bg-gray-50 rounded-lg px-8 py-3"
        >
          Back to edit
        </Button>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg">
          Save Report
        </Button>
      </div>
    </div>
  );
}
