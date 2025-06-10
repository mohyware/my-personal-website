export default function Footer() {
    return (
        <footer className="w-full py-6 mt-auto">
            <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} Mohy Elden. All rights reserved.
                </p>
            </div>
        </footer>
    )
} 