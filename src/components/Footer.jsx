import React from 'react';
import { ImFacebook, ImGithub, ImLinkedin, ImTwitter } from 'react-icons/im';

function Footer() {
    return (
        <footer class="bg-gray-200 mt-10">
            <div class="container mx-auto flex justify-between items-center p-4 h-40">
                <p class="text-sm text-gray-600">
                    Copyright 2023 @Sangye Tashi. All rights reserved.
                </p>
                <ul class="flex items-center">
                    <li class="ml-4">
                        <a
                            href="https://github.com/SangyeTashi"
                            class="text-gray-600 hover:text-blue-500"
                            target="_blank"
                        >
                            <ImGithub className="text-xl" />
                        </a>
                    </li>
                    <li class="ml-4">
                        <a
                            href="https://www.linkedin.com/in/sangyetashi/"
                            class="text-gray-600 hover:text-blue-500"
                            target="_blank"
                        >
                            <ImLinkedin className="text-xl" />
                        </a>
                    </li>
                    <li class="ml-4">
                        <a
                            href="https://twitter.com/SangyeTashi"
                            class="text-gray-600 hover:text-blue-500"
                            target="_blank"
                        >
                            <ImTwitter className="text-xl" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
