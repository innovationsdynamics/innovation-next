import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Printer, Scan, Settings } from 'lucide-react';

// All guides data in one place
export const guides = [
  {
    id: 'printer',
    slug: 'choosing-a-printer',
    title: 'How to Choose the Right Printer',
    icon: <Printer size={28} className="text-amber-600" />,
    iconBg: 'bg-amber-50',
    intro: 'Picking a printer doesn\'t have to be complicated. With so many options available today—from small home models to powerful office workhorses—understanding your unique needs is the first step to making a wise investment.',
    content: (
      <>
        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Different Types of Printers</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          There are three main categories of printers, each designed for specific tasks and offering distinct advantages:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
          <li><strong className="text-black">Inkjet Printers:</strong> These use liquid ink sprayed through tiny nozzles. They excel at printing photos and handling various types of paper. Inkjets usually have a lower initial price but may have higher per-page costs over time. They're a great fit for home users who print occasionally or need excellent color quality.</li>
          <li><strong className="text-black">Laser Printers:</strong> Using toner powder and heat, laser printers produce sharp text documents very quickly. They're ideal for offices or anyone who prints a lot of text-heavy pages. While the upfront cost is often higher, the cost per page is usually lower than inkjets, and toner cartridges last much longer.</li>
          <li><strong className="text-black">All-in-One (Multifunction) Printers:</strong> These combine printing, scanning, copying, and sometimes faxing into one device. Available in both inkjet and laser varieties, they save desk space and are practical for home offices and small businesses that need versatility without buying multiple machines.</li>
        </ul>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Important Things to Consider</h3>
        <h4 className="text-xl font-semibold text-black mt-6 mb-3">Print Volume</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Think about how many pages you print each month. Light users (fewer than 100 pages/month) may be fine with a basic inkjet. Moderate users (100-500 pages) should consider a laser for better efficiency. Heavy users (over 500 pages) need high-duty-cycle laser printers designed for steady, long-term use.
        </p>

        <h4 className="text-xl font-semibold text-black mt-6 mb-3">Color vs. Black Only</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you mostly print text documents, a black-and-white laser printer offers speed and savings. For graphics, photos, or marketing materials, color is essential. Color lasers have become more affordable, though color inkjets still produce excellent photo quality.
        </p>

        <h4 className="text-xl font-semibold text-black mt-6 mb-3">Speed and Connectivity</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Print speed is measured in pages per minute (PPM). Home users rarely need more than 15-20 PPM, while busy offices benefit from 30+ PPM. For connections, most modern printers have Wi-Fi, allowing wireless printing from computers and mobile devices. Ethernet ports are useful for shared office settings, while USB is still handy for direct connections.
        </p>

        <h4 className="text-xl font-semibold text-black mt-6 mb-3">Total Cost of Ownership</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          The purchase price is only part of the story. Calculate the cost per page by dividing the cartridge price by its page yield. Inkjet cartridges may cost less upfront but print fewer pages. High-yield or XL cartridges often offer better value for regular users. Some printers use ink tank systems that dramatically reduce per-page costs for high-volume printing.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Consider ongoing expenses like paper, replacement cartridges, and potential maintenance. A printer with a higher purchase price but lower running costs may save money over several years of use.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Useful Features to Look For</h3>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
          <li><strong className="text-black">Duplex (Two-Sided) Printing:</strong> Saves paper and is standard on many models. Automatic duplexing is much more convenient than flipping pages manually.</li>
          <li><strong className="text-black">Paper Handling:</strong> Check the tray capacity and what paper sizes are supported. Multiple trays let you keep different paper types loaded at once.</li>
          <li><strong className="text-black">Mobile Printing:</strong> Support for AirPrint (Apple) and Mopria (Android) makes printing from smartphones and tablets easy.</li>
          <li><strong className="text-black">Display and Controls:</strong> Touchscreens simplify setup and use, especially on all-in-one devices.</li>
        </ul>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Making Your Final Decision</h3>
        <p className="text-gray-700 leading-relaxed">
          Match the printer to your actual usage habits. Home users with occasional needs may prioritize a low upfront cost and compact size. Home offices benefit from all-in-one devices with reliable wireless connectivity. Business environments should focus on speed, capacity, and total cost of ownership. Take time to research specific models, read reviews from users with similar needs, and consider the manufacturer's reputation for reliability and support. The right printer will serve you well for years with minimal hassle.
        </p>
      </>
    )
  },
  {
    id: 'scanner',
    slug: 'choosing-a-scanner',
    title: 'Finding Your Perfect Scanner',
    icon: <Scan size={28} className="text-orange-600" />,
    iconBg: 'bg-orange-50',
    intro: 'In today\'s increasingly digital world, scanners are still essential tools for turning physical documents, photos, and artwork into digital files. Whether you\'re digitizing family photos, organizing paperwork, or archiving important records.',
    content: (
      <>
        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Types of Scanners</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Each type of scanner is made for specific tasks and workflows:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
          <li><strong className="text-black">Flatbed Scanners:</strong> The most flexible option, with a glass surface where you place documents face-down. Flatbeds handle single sheets, book pages, photos, and even small 3D objects. They're perfect for mixed-media scanning and situations where document condition varies. Most photo enthusiasts prefer flatbeds because they can capture delicate or fragile items without bending them.</li>
          <li><strong className="text-black">Sheet-Fed (Document) Scanners:</strong> Built for volume, these scanners automatically feed stacks of paper through the device. They're excellent for offices that regularly process invoices, contracts, or letters. While they can't handle bound materials or fragile photos, their speed and automation make quick work of large batches of documents.</li>
          <li><strong className="text-black">Portable Scanners:</strong> Compact and lightweight, portable scanners are great for professionals on the move. They usually scan one page at a time and may be powered by batteries or USB. Traveling salespeople, field workers, and anyone who needs to digitize documents away from the office will appreciate their convenience.</li>
        </ul>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Resolution and Image Quality</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Scanner resolution is measured in dots per inch (DPI). Higher DPI means more detail, but also larger file sizes and longer scan times. Here's a simple guide:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
          <li><strong className="text-black">200-300 DPI:</strong> Good enough for text documents and general office paperwork. Files stay manageable and text stays clear for reading and optical character recognition.</li>
          <li><strong className="text-black">600 DPI:</strong> A great choice for photos you'll view on screen or print at their original size. Captures enough detail for most archival purposes.</li>
          <li><strong className="text-black">1200+ DPI:</strong> Recommended for scanning negatives, slides, or photos you plan to enlarge significantly. Essential for professional graphics work and high-quality reproductions.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-8">
          Optical resolution (the actual sensor capability) is more important than interpolated resolution (software enhancement). Focus on optical specs when comparing models.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Speed and Volume</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Scanner speed varies a lot by type and intended use. Flatbed scanners usually take 10-30 seconds per page, which is fine for occasional use. Document scanners can process 25-60+ pages per minute, making them essential for heavy workloads.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Think about your typical batch size. If you occasionally scan a few pages, speed is less important than quality and features. If you regularly work with dozens or hundreds of pages, invest in a scanner rated for high daily use with a reliable automatic document feeder.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Key Features to Consider</h3>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
          <li><strong className="text-black">Duplex Scanning:</strong> Scans both sides of a page in one pass, which is essential for two-sided documents. Single-pass duplex is faster than scanners that flip the page.</li>
          <li><strong className="text-black">OCR (Optical Character Recognition):</strong> Turns scanned text into searchable, editable content. Most scanners include basic OCR software; accuracy varies with document quality and font types.</li>
          <li><strong className="text-black">Cloud Integration:</strong> Direct scanning to services like Google Drive, Dropbox, or OneDrive simplifies workflows and lets you share files right away.</li>
          <li><strong className="text-black">Auto Document Feeder (ADF) Capacity:</strong> Sheet-fed scanners have different ADF capacities, from 20 to 100+ sheets. Larger capacities mean you spend less time reloading.</li>
        </ul>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Document vs. Photo Scanning</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Your main use case should guide your choice. Document-focused users should prioritize speed, ADF capacity, and OCR accuracy. Photo enthusiasts should focus on optical resolution, color accuracy, and sensor quality.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Some flatbed scanners include transparency adapters for negatives and slides. If you have a film archive to digitize, this feature is very useful. Dedicated film scanners are available for serious photographers but may be overkill for casual users.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Software and Compatibility</h3>
        <p className="text-gray-700 leading-relaxed">
          Check that the scanner works with your operating system—Windows, macOS, or both. Look at the included software bundle; some manufacturers offer excellent scanning applications while others provide only basic drivers. Industry-standard TWAIN compatibility lets the scanner work with third-party programs. Consider whether the manufacturer provides ongoing driver updates, especially if you plan to use the scanner for several years.
        </p>
      </>
    )
  },
  {
    id: 'maintenance',
    slug: 'setup-and-maintenance',
    title: 'Setup & Maintenance Tips',
    icon: <Settings size={28} className="text-[#024ad8]" />,
    iconBg: 'bg-[#024ad8]/10',
    intro: 'Getting the most out of your printer or scanner starts with proper setup and continues with regular care. Taking a few extra minutes during installation and developing good habits can prevent problems.',
    content: (
      <>
        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Initial Setup Best Practices</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Before unboxing, choose a spot away from direct sunlight and heat sources, which can affect ink and toner performance. Make sure there's good ventilation—laser printers especially benefit from proper airflow. Place the device on a stable, level surface that can support its weight with paper loaded.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Remove all shipping tape, protective materials, and packing inserts completely. These items are often hidden inside paper trays, near cartridge areas, and around moving parts. Missing even one piece can cause jams or damage during operation.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Install cartridges or toner before turning the device on for the first time. Many machines run an initialization sequence that primes the print heads or calibrates the imaging system. Doing this without supplies installed may cause issues.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Driver Installation</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          While many operating systems automatically detect and install basic drivers, visiting the manufacturer's website for the latest software often provides better functionality. Full software packages usually include enhanced settings, scanning utilities, and firmware updates.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Download drivers specific to your operating system version. After installation, check for firmware updates through the manufacturer's software or the device's built-in menu. Firmware updates can fix bugs, improve performance, and sometimes add new features.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Network and Wireless Setup</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          For wireless printing, connect the device to the same network as your computers and mobile devices. Most modern printers have touchscreens or buttons to navigate wireless setup, or you can use WPS (Wi-Fi Protected Setup) if your router supports it. Have your network name and password ready.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          If the wireless connection seems unreliable, move the printer closer to your router or consider a wired Ethernet connection for consistent performance. In offices, Ethernet connections often provide more reliable shared printing than wireless.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Enable mobile printing features if available. AirPrint (Apple), Mopria (Android), and manufacturer-specific apps make printing from phones and tablets easy. These usually work automatically once the device joins your network.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Regular Maintenance</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Consistent care prevents many common problems:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
          <li><strong className="text-black">Cleaning:</strong> Dust paper feed rollers monthly with a lint-free cloth. Clean scanner glass regularly with a suitable glass cleaner—fingerprints and debris affect scan quality. For inkjet printers, use the built-in printhead cleaning utility when output shows streaks or missing colors.</li>
          <li><strong className="text-black">Calibration:</strong> Run color calibration occasionally if your printer offers it. This aligns print heads and optimizes color accuracy. Scanners may also have calibration options, especially useful when color precision matters.</li>
          <li><strong className="text-black">Paper Care:</strong> Store paper flat in its original packaging until use. Humidity can cause paper to curl or stick together, leading to jams. Don't overload paper trays beyond their marked capacity.</li>
        </ul>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Cartridge and Toner Tips</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Keep spare cartridges in their sealed packaging until needed—exposure to air and light can degrade ink. Store them at room temperature; extreme cold or heat affects consistency.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          When replacing cartridges, shake toner cartridges gently to redistribute the powder before installation. For inkjet printers, make sure new cartridges are firmly seated and protective tape is completely removed.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Don't wait until ink runs completely dry. Printing on empty cartridges can damage print heads in some inkjet models. Replace cartridges when warnings appear and monitor supply levels through your printer software.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Troubleshooting Common Issues</h3>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
          <li><strong className="text-black">Paper Jams:</strong> Clear jams by following the path the paper travels, pulling gently in the direction of movement. Check for small torn pieces that may remain inside.</li>
          <li><strong className="text-black">Print Quality Issues:</strong> Run cleaning and alignment utilities. Check cartridge levels and try printing a test page. For laser printers, low toner often causes faded output before empty warnings appear.</li>
          <li><strong className="text-black">Connection Problems:</strong> Restart the printer and computer. For wireless issues, verify the network connection through the printer's menu and ensure your computer is on the same network.</li>
        </ul>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Extending Equipment Lifespan</h3>
        <p className="text-gray-700 leading-relaxed">
          Use your printer regularly—inkjet printers especially benefit from occasional use to prevent print heads from drying out. Turn the device off properly using its power button rather than unplugging it; this allows proper parking of print heads. Keep the device clean and dust-free, and address issues quickly before they become serious problems. With proper care, quality printers and scanners can provide reliable service for many years.
        </p>
      </>
    )
  }
];

// Helper function to get a guide by slug
export function getGuideBySlug(slug) {
  return guides.find(guide => guide.slug === slug);
}

const GuideDetail = ({ guide }) => {
  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-28 pb-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link href="/buying-guide" className="inline-flex items-center gap-2 text-[#024ad8] font-semibold mb-8 hover:underline">
          <ArrowLeft size={16} /> Back to All Guides
        </Link>
        
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm border border-gray-200">
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-14 h-14 ${guide.iconBg} rounded-lg flex items-center justify-center`}>
              {guide.icon}
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-black">{guide.title}</h1>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            {guide.intro}
          </p>

          {guide.content}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-10 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
            Innovation Dynamics Group LLC © 2026
          </p>
        </footer>
      </div>
    </div>
  );
};

export default GuideDetail;
