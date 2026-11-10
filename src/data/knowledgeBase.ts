export interface KnowledgeItem {
  id: string;
  category: string;
  categoryLabel: string;
  question: string;
  answer: string;
  tags: string[];
}

export interface KnowledgeCategory {
  id: string;
  label: string;
}

export const kbCategories: KnowledgeCategory[] = [
  { id: "all", label: "All Questions" },
  { id: "cpanel", label: "cPanel & Hosting" },
  { id: "wordpress", label: "WordPress & Speed" },
  { id: "woocommerce", label: "WooCommerce & Store" },
  { id: "domains", label: "Domains & DNS" },
  { id: "security", label: "Security & SSL" },
  { id: "backups", label: "Backups & Migration" },
  { id: "hardware", label: "Hardware & Network" },
  { id: "billing", label: "Billing & Policies" }
];

export const knowledgeItems: KnowledgeItem[] = [
  // ══════════════════════════════════════════════════════════════════════════
  // CATEGORY 1: CPANEL & HOSTING MANAGEMENT (Questions 1 - 25)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "kb-001",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "What is cPanel and how do I log in to my cPanel dashboard?",
    answer: "cPanel is the industry-standard web hosting control panel that lets you manage files, databases, emails, and domains through a visual web interface. You can access your cPanel by visiting yourdomain.com/cpanel or yourdomain.com:2083, or by clicking the direct 1-click 'Log in to cPanel' button inside your Hostamble client portal.",
    tags: ["cpanel", "login", "dashboard", "port 2083", "client portal"]
  },
  {
    id: "kb-002",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "How do I upload and extract website files using cPanel File Manager?",
    answer: "In cPanel, click 'File Manager' under Files and navigate to the 'public_html' directory (the root folder for your primary website). Click 'Upload' in the top toolbar to upload individual files or a compressed .zip archive. Once uploaded, right-click the .zip file in File Manager and select 'Extract' to unpack your files in seconds.",
    tags: ["file manager", "upload", "zip", "extract", "public_html"]
  },
  {
    id: "kb-003",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "How do I create and manage FTP accounts in cPanel?",
    answer: "Go to cPanel > 'FTP Accounts'. Enter a username, generate a strong password, and specify the directory path the FTP user is permitted to access. Click 'Create FTP Account'. You can then connect using FileZilla, Cyberduck, or WinSCP using your domain or server IP as Host, port 21, and the credentials you created.",
    tags: ["ftp", "filezilla", "sftp", "credentials", "port 21"]
  },
  {
    id: "kb-004",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "How do I create a new MySQL database and user in cPanel?",
    answer: "Navigate to cPanel > 'MySQL Databases' (or use the step-by-step 'MySQL Database Wizard'). (1) Enter a database name and click 'Create Database'. (2) Scroll down to 'MySQL Users', enter a username and strong password, and click 'Create User'. (3) Under 'Add User to Database', select both the user and database, click 'Add', check 'ALL PRIVILEGES', and click 'Make Changes'.",
    tags: ["mysql", "database", "database user", "privileges", "wizard"]
  },
  {
    id: "kb-005",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "How do I import or export a MySQL database using phpMyAdmin?",
    answer: "Open cPanel > 'phpMyAdmin'. To export: Select your database from the left panel, click the 'Export' tab, choose 'Quick' method with SQL format, and click 'Export'. To import: Click your database, navigate to the 'Import' tab, click 'Choose File' to select your .sql or .sql.zip file, and click 'Import' at the bottom.",
    tags: ["phpmyadmin", "import database", "export database", "sql", "dump"]
  },
  {
    id: "kb-006",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "How do I set up automated cron jobs in cPanel?",
    answer: "Navigate to cPanel > 'Cron Jobs'. Choose a common interval from the dropdown (e.g., Once an hour, Once a day at midnight) or set custom minute, hour, day, and month fields. In the 'Command' field, input your script path, such as 'php -q /home/username/public_html/cron.php', and click 'Add New Cron Job'.",
    tags: ["cron jobs", "cron", "scheduled tasks", "automation", "syntax"]
  },
  {
    id: "kb-007",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "Where can I view my server error logs (error_log) to debug website issues?",
    answer: "You can view errors in two places: (1) Inside cPanel, click 'Errors' under the Metrics section to see the latest 300 Apache/LiteSpeed web server errors. (2) Open cPanel > 'File Manager', navigate to your website directory (public_html), and open the 'error_log' file to inspect detailed PHP fatal errors, warnings, and stack traces.",
    tags: ["error log", "debug", "500 error", "stack trace", "metrics"]
  },
  {
    id: "kb-008",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "How do I increase upload_max_filesize and post_max_size in cPanel?",
    answer: "Go to cPanel > 'Select PHP Version' (or 'MultiPHP INI Editor'). Under the 'Options' tab, locate 'upload_max_filesize' and 'post_max_size', then increase them to your desired limit (e.g., 256M or 512M). Also increase 'memory_limit' to at least 256M and click 'Apply'. Changes take effect immediately across all your PHP scripts.",
    tags: ["upload limit", "upload_max_filesize", "post_max_size", "php ini"]
  },
  {
    id: "kb-009",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "How do I toggle PHP error display on or off in cPanel?",
    answer: "Open cPanel > 'Select PHP Version' > 'Options'. Toggle 'display_errors' ON for development/debugging or OFF for live production environments (recommended for security so visitors do not see internal file paths). Ensure 'log_errors' remains enabled so errors continue recording to your error_log file.",
    tags: ["display errors", "php debug", "php options", "error reporting"]
  },
  {
    id: "kb-010",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "How do I password-protect a specific directory or folder in cPanel?",
    answer: "In cPanel, click 'Directory Privacy' under Files. Navigate to the folder you wish to protect (e.g., /public_html/admin-area) and click 'Edit'. Check 'Password protect this directory', enter a public name for the protected area, and click 'Save'. Under 'Create an Authorised User', assign a username and password to grant authorized access.",
    tags: ["directory privacy", "password protect", "htaccess auth", "security"]
  },
  {
    id: "kb-011",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "What is the difference between public_html and the cPanel home root directory?",
    answer: "Your home root directory (/home/username/) stores your private configuration files, SSL certificates, email storage, server logs, and backup archives that must never be accessible to public web browsers. The 'public_html' folder (also known as www) is the publicly accessible web root; anything placed inside public_html is served directly to website visitors.",
    tags: ["public_html", "root directory", "web root", "file structure"]
  },
  {
    id: "kb-012",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "How do I set up 301 permanent redirects using .htaccess in cPanel?",
    answer: "Open File Manager in cPanel, go to public_html, and edit your .htaccess file. To redirect an old page to a new one, add: 'Redirect 301 /old-page.html https://yourdomain.com/new-page.html'. To redirect an entire old domain to a new domain, add: 'RewriteEngine On RewriteCond %{HTTP_HOST} ^olddomain\\.com$ [OR] RewriteCond %{HTTP_HOST} ^www\\.olddomain\\.com$ RewriteRule ^(.*)$ https://newdomain.com/$1 [R=301,L]'.",
    tags: ["301 redirect", "htaccess", "permanent redirect", "seo redirect"]
  },
  {
    id: "kb-013",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "How do I view hidden dotfiles (like .htaccess or .env) in cPanel File Manager?",
    answer: "In cPanel, open 'File Manager'. In the top right corner, click the 'Settings' button (gear icon). In the modal that appears, check 'Show Hidden Files (dotfiles)' and click 'Save'. Files starting with a period such as .htaccess, .user.ini, and .env will now be permanently visible in your directory listings.",
    tags: ["dotfiles", "hidden files", "htaccess", "file manager settings"]
  },
  {
    id: "kb-014",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "How do I download a complete cPanel backup archive locally?",
    answer: "In cPanel, click 'Backup Wizard' under Files. Click 'Backup', then choose 'Full Backup'. Select 'Home Directory' as the backup destination and enter your email address to be notified upon completion. Once finished, download the resulting .tar.gz archive directly from your home directory to your local computer.",
    tags: ["cpanel backup", "backup wizard", "download backup", "tar.gz"]
  },
  {
    id: "kb-015",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "How can I check which folders are consuming the most disk storage in cPanel?",
    answer: "Navigate to cPanel > 'Disk Usage' under Files. This tool provides a visual breakdown of disk space consumed by public_html, MySQL databases, email accounts, and log files. Scroll to the bottom table to expand subdirectories in descending size order to identify oversized backup archives, error logs, or cache files.",
    tags: ["disk usage", "storage", "large files", "disk full", "quota"]
  },
  {
    id: "kb-016",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "How do I enable Hotlink Protection to prevent other sites from stealing my bandwidth?",
    answer: "In cPanel, click 'Hotlink Protection' under Security. Click 'Enable'. Enter the URLs permitted to link to your images (e.g., https://yourdomain.com). In the 'Block direct access for extensions' field, specify file extensions like jpg, jpeg, png, gif, and webp, then click 'Submit'.",
    tags: ["hotlink protection", "bandwidth theft", "image protection"]
  },
  {
    id: "kb-017",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "How do I ban a malicious IP address using IP Blocker in cPanel?",
    answer: "Go to cPanel > 'IP Blocker' under Security. In the 'IP Address or Domain' input field, type the single IP address (e.g., 192.168.1.1), an IP range (e.g., 192.168.1.1-192.168.1.50), or a CIDR block (e.g., 192.168.1.0/24), then click 'Add'. The server will block all HTTP and HTTPS requests originating from those IPs instantly.",
    tags: ["ip blocker", "ban ip", "firewall", "block hacker", "security"]
  },
  {
    id: "kb-018",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "What is Terminal access in cPanel and how do I run shell commands?",
    answer: "Terminal provides a browser-based SSH command-line interface directly within cPanel under the Advanced section. It lets you run command-line tools like WP-CLI ('wp plugin update --all'), Git ('git pull origin main'), Composer, and npm without needing external desktop SSH clients like PuTTY.",
    tags: ["terminal", "ssh", "wp-cli", "command line", "git"]
  },
  {
    id: "kb-019",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "Can I install and host Node.js applications in cPanel?",
    answer: "Yes. In cPanel, navigate to 'Setup Node.js App' under Software. Click 'Create Application', select your preferred Node.js version (e.g., 18.x, 20.x), specify your Application Root folder and Application Startup file (e.g., app.js or server.js), and enter your domain name. Click 'Create', run 'npm install', and start your application.",
    tags: ["nodejs", "npm", "setup nodejs app", "javascript", "backend"]
  },
  {
    id: "kb-020",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "How do I manage SSL certificates, private keys, and CSRs in cPanel?",
    answer: "Navigate to cPanel > 'SSL/TLS' under Security. From here, you can generate Certificate Signing Requests (CSR), upload third-party private keys, install commercial SSL certificates, or inspect installed certificates across all primary and addon domains.",
    tags: ["ssl tls", "csr", "private key", "certificate manager"]
  },
  {
    id: "kb-021",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "What is ModSecurity and how do I disable it for a specific domain?",
    answer: "ModSecurity is a real-time web application firewall that inspects incoming HTTP requests to block common attacks like SQL injection and cross-site scripting. If a legitimate script or plugin triggers a false positive, go to cPanel > 'ModSecurity', locate your domain name, and toggle the status from ON to OFF.",
    tags: ["modsecurity", "waf", "false positive", "firewall toggle"]
  },
  {
    id: "kb-022",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "How do I view bandwidth usage metrics across my domains in cPanel?",
    answer: "Navigate to cPanel > 'Bandwidth' under Metrics. This screen displays HTTP, FTP, and Mail bandwidth consumption over the current month, daily trends, and historical pie charts, allowing you to identify traffic spikes or unexpected resource drains.",
    tags: ["bandwidth", "metrics", "traffic usage", "monthly limit"]
  },
  {
    id: "kb-023",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "What is Track DNS in cPanel and how does it diagnose domain lookup issues?",
    answer: "Track DNS in cPanel (under Advanced) allows you to verify that domain resolution is working correctly directly from the server. It includes a Domain Lookup tool (equivalent to dig/nslookup) to query IP records and a Trace Route tool to map network hops between the server and any external hostname.",
    tags: ["track dns", "nslookup", "traceroute", "network test"]
  },
  {
    id: "kb-024",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "How do I change the default index page order in cPanel via .htaccess?",
    answer: "By default, servers serve index.html before index.php. To prioritize index.php, add this line at the top of your public_html/.htaccess file: 'DirectoryIndex index.php index.html index.htm'. You can list any filenames in order of preference.",
    tags: ["directoryindex", "index page", "htaccess", "default page"]
  },
  {
    id: "kb-025",
    category: "cpanel",
    categoryLabel: "cPanel & Hosting",
    question: "How do I change the primary domain associated with my cPanel account?",
    answer: "Because changing a cPanel account's primary domain updates server virtual hosts, DNS zones, and email routing, open a quick ticket or WhatsApp support message with your current domain and requested new domain. Our support team updates the primary domain within minutes with zero file loss.",
    tags: ["change domain", "primary domain", "rename account", "support ticket"]
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CATEGORY 2: WORDPRESS SPEED & OPTIMIZATION (Questions 26 - 50)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "kb-026",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "How do I 1-click install WordPress using Softaculous in cPanel?",
    answer: "Log in to cPanel, scroll to 'Softaculous Apps Installer', and click 'WordPress'. Click 'Install Now'. Choose https:// protocol, select your domain name, enter your Site Name, and configure your Admin Username and strong password. Scroll to the bottom and click 'Install'. Softaculous deploys WordPress with MySQL database configuration completed in under 45 seconds.",
    tags: ["softaculous", "install wordpress", "1-click install", "wordpress setup"]
  },
  {
    id: "kb-027",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "What makes WordPress load up to 10x faster on LiteSpeed Web Server than Apache?",
    answer: "LiteSpeed Enterprise features an event-driven asynchronous architecture that communicates directly with the Linux kernel. Combined with the server-level LiteSpeed Cache (LSCache) engine, dynamic WordPress PHP page requests are cached as pre-rendered static HTML directly in server memory. This bypasses the PHP execution engine and MySQL database queries entirely for cached visits, delivering sub-100ms TTFB.",
    tags: ["litespeed", "apache comparison", "speed", "lscache", "benchmarks"]
  },
  {
    id: "kb-028",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "How do I configure the LiteSpeed Cache (LSCache) plugin in WordPress for best performance?",
    answer: "In WordPress admin, go to LiteSpeed Cache > 'Cache' and ensure 'Enable Cache' is set to ON. Under Page Optimization: (1) Enable CSS Minify and CSS Combine. (2) Enable JS Minify and Load JS Deferred. (3) Under Image Optimization, enable WebP Image Replacement. (4) Under Database, run DB Optimizer to clean up post revisions and transients.",
    tags: ["lscache setup", "minify", "webp", "database cleanup", "speed optimization"]
  },
  {
    id: "kb-029",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "What is Redis Object Caching and how do I enable it in WordPress?",
    answer: "Redis is an in-memory data store that caches complex MySQL database query results in RAM. When enabled, repeated queries (like site options, menu structures, and user sessions) load from RAM instantly rather than querying the disk. In WordPress, go to LiteSpeed Cache > 'Cache' > 'Object', toggle Object Cache to ON, set Method to 'Redis', Host to '127.0.0.1', and Port to '6379'.",
    tags: ["redis", "object cache", "ram caching", "database speed"]
  },
  {
    id: "kb-030",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "How do I enable OPcache in cPanel to speed up WordPress PHP execution?",
    answer: "Go to cPanel > 'Select PHP Version' > 'Extensions'. Locate 'opcache' in the extension checklist and check the box to enable it. OPcache compiles PHP scripts into pre-compiled bytecode stored in shared memory, eliminating the overhead of parsing and compiling PHP scripts on every page load.",
    tags: ["opcache", "php bytecode", "performance", "php extensions"]
  },
  {
    id: "kb-031",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "What is WordPress 1-Click Staging and how do I create a staging copy?",
    answer: "1-Click Staging creates an isolated duplicate of your live WordPress website where you can test theme redesigns, new plugins, and core updates safely. In cPanel, open Softaculous > 'All Installations', find your WordPress website, and click the 'Create Staging' icon. Enter your staging subdomain (e.g., staging.yourdomain.com) and click 'Create Staging'.",
    tags: ["staging", "softaculous staging", "testing", "sandbox"]
  },
  {
    id: "kb-032",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "How do I push changes from WordPress staging back to my live production site?",
    answer: "In cPanel, open Softaculous > 'All Installations'. Locate your staging installation and click the 'Push to Live' icon. Choose whether to push all files and database tables or exclude specific tables, then click 'Push to Live'. Softaculous deploys the staged version to your live domain with zero downtime.",
    tags: ["push to live", "staging sync", "deploy wordpress", "zero downtime"]
  },
  {
    id: "kb-033",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "Why is server TTFB (Time to First Byte) critical for Google SEO and Core Web Vitals?",
    answer: "Time to First Byte measures server responsiveness before page rendering begins. A high TTFB (>600ms) delays Largest Contentful Paint (LCP) and First Input Delay (FID), directly harming your Core Web Vitals score. Google algorithms favor sites with low TTFB (<200ms) by indexing pages faster and ranking them higher in search results.",
    tags: ["ttfb", "core web vitals", "lcp", "seo ranking", "google algorithm"]
  },
  {
    id: "kb-034",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "How do I fix the 'Error Establishing a Database Connection' in WordPress?",
    answer: "This error indicates WordPress cannot authenticate with MySQL: (1) Open cPanel File Manager and edit wp-config.php in public_html. (2) Verify that DB_NAME, DB_USER, DB_PASSWORD, and DB_HOST ('localhost') match your cPanel MySQL Database settings. (3) In cPanel MySQL Databases, confirm the user is added to the database with 'ALL PRIVILEGES'. (4) If corrupted, add 'define('WP_ALLOW_REPAIR', true);' to wp-config.php and visit yourdomain.com/wp-admin/maint/repair.php.",
    tags: ["database error", "wp-config", "mysql connection", "repair database"]
  },
  {
    id: "kb-035",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "How do I fix the WordPress White Screen of Death (WSOD)?",
    answer: "WSOD is usually caused by a PHP memory exhaustion or faulty plugin. To fix: (1) In cPanel File Manager, open public_html/wp-content/ and temporarily rename the 'plugins' folder to 'plugins_deactivated' to disable all plugins. If the site recovers, rename it back and activate plugins one by one. (2) Increase memory_limit in cPanel MultiPHP INI Editor to 512M. (3) Check cPanel 'Errors' or wp-content/debug.log to identify the offending script.",
    tags: ["wsod", "white screen", "troubleshooting", "deactivate plugins", "php memory"]
  },
  {
    id: "kb-036",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "How do I fix a 403 Forbidden error on wp-admin or wp-login.php?",
    answer: "A 403 Forbidden error on admin pages is usually caused by corrupted .htaccess rules, ModSecurity blocks, or wrong file permissions: (1) Rename your .htaccess file to .htaccess_old and regenerate default WordPress permalinks in wp-admin Settings > Permalinks. (2) In cPanel, verify directory permissions are set to 755 and file permissions to 644. (3) Check cPanel > ModSecurity to see if an aggressive WAF rule is flagging your IP address.",
    tags: ["403 forbidden", "wp-admin error", "file permissions", "modsecurity"]
  },
  {
    id: "kb-037",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "How do I resolve 504 Gateway Timeout errors during WordPress updates?",
    answer: "A 504 Gateway Timeout happens when a PHP script exceeds maximum execution time. Open cPanel > 'Select PHP Version' > 'Options' (or MultiPHP INI Editor) and increase 'max_execution_time' from 30 to 300, and 'max_input_time' to 300. In LiteSpeed, also ensure LiteSpeed Cache crawler processes are throttled during updates.",
    tags: ["504 timeout", "gateway timeout", "max_execution_time", "php timeout"]
  },
  {
    id: "kb-038",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "How do I increase WP_MEMORY_LIMIT in wp-config.php?",
    answer: "Open cPanel File Manager, navigate to public_html, and edit wp-config.php. Right before the line that says '/* That's all, stop editing! Happy publishing. */', add: 'define(\\'WP_MEMORY_LIMIT\\', \\'512M\\');' and 'define(\\'WP_MAX_MEMORY_LIMIT\\', \\'512M\\');'. Save changes to allocate up to 512MB of RAM to WordPress admin and page builder processes.",
    tags: ["wp_memory_limit", "wp-config", "memory limit", "elementor memory"]
  },
  {
    id: "kb-039",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "How do I fix 'Maximum execution time of 30 seconds exceeded' in WordPress?",
    answer: "In cPanel > MultiPHP INI Editor, select your domain name and change 'max_execution_time = 300'. Alternatively, add this line to your public_html/.htaccess file: 'php_value max_execution_time 300', or add 'set_time_limit(300);' to your wp-config.php file.",
    tags: ["execution time", "php timeout", "max_execution_time", "htaccess"]
  },
  {
    id: "kb-040",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "How do I resolve mixed content (HTTP/HTTPS) warnings after enabling SSL?",
    answer: "Mixed content warnings occur when a secure HTTPS page requests insecure HTTP images, CSS, or scripts. To resolve: (1) Go to WordPress Settings > General and ensure both 'WordPress Address' and 'Site Address' start with 'https://'. (2) Install the 'Better Search Replace' plugin and replace 'http://yourdomain.com' with 'https://yourdomain.com' across all database tables. (3) In LiteSpeed Cache > Media, enable 'HTTPS In-place Replacement'.",
    tags: ["mixed content", "ssl warning", "insecure content", "https fix"]
  },
  {
    id: "kb-041",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "How do I clean and optimize WordPress database tables to remove overhead?",
    answer: "Over time, post revisions, spam comments, and expired transients inflate database size. In WordPress admin, go to LiteSpeed Cache > 'Database' > 'Manage: DB Optimizer'. Click 'Clean All' to safely delete post revisions, auto drafts, trashed posts, and expired transients, then click 'Optimize Tables' to defragment your MySQL tables.",
    tags: ["database optimization", "db cleanup", "post revisions", "transients"]
  },
  {
    id: "kb-042",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "What is the WordPress Heartbeat API and how do I optimize its frequency?",
    answer: "The Heartbeat API sends continuous AJAX requests (every 15 to 60 seconds) between the browser and server for auto-saving drafts and post-locking. On busy sites, this causes high CPU usage. In LiteSpeed Cache > 'Toolbox' > 'Heartbeat', enable Heartbeat Control and set backend and frontend intervals to 60–120 seconds to cut CPU overhead by up to 70%.",
    tags: ["heartbeat api", "admin-ajax", "cpu usage", "litespeed toolbox"]
  },
  {
    id: "kb-043",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "How do I disable XML-RPC in WordPress to block brute-force attacks?",
    answer: "XML-RPC (xmlrpc.php) is an older API often targeted by attackers to launch brute-force password guesses and DDoS amplification attacks. To disable it, add the following snippet to your public_html/.htaccess file: '<Files xmlrpc.php> Order Deny,Allow Deny from all </Files>'. (Jetpack users: keep xmlrpc.php active or whitelist Jetpack server IPs).",
    tags: ["xml-rpc", "xmlrpc.php", "security", "brute force", "htaccess"]
  },
  {
    id: "kb-044",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "How do I reset a lost WordPress admin password using phpMyAdmin?",
    answer: "Open cPanel > phpMyAdmin, select your WordPress database, and click the 'wp_users' table. Find your admin username and click 'Edit'. In the 'user_pass' row, change the 'Function' dropdown to 'MD5', type your new desired password in the 'Value' field, and click 'Go' at the bottom. Your new password is now active.",
    tags: ["reset password", "lost password", "phpmyadmin", "wp_users", "md5"]
  },
  {
    id: "kb-045",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "How do I fix broken permalinks returning 404 errors on WordPress pages?",
    answer: "In WordPress admin, go to Settings > 'Permalinks'. Without making any changes, scroll down and click 'Save Changes'. This flushes and rewrites the rewrite rules in your .htaccess file. If the file cannot be written automatically, open cPanel File Manager and ensure public_html/.htaccess contains standard WordPress rewrite rules.",
    tags: ["permalinks", "404 error", "flush rewrite rules", "htaccess"]
  },
  {
    id: "kb-046",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "How do I enable Brotli and Gzip compression for WordPress on LiteSpeed?",
    answer: "LiteSpeed Enterprise natively compresses text-based assets (HTML, CSS, JS, SVG) using Brotli (br) and Gzip without requiring manual .htaccess edits. To verify, open your browser Developer Tools > Network tab, select any CSS/JS file, and verify the 'content-encoding: br' header is present in the response.",
    tags: ["brotli", "gzip", "compression", "litespeed", "page size"]
  },
  {
    id: "kb-047",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "What image format (WebP vs JPEG) is best for WordPress performance?",
    answer: "WebP is superior to JPEG and PNG, providing 25% to 35% smaller file sizes at identical visual quality. With LiteSpeed Cache's built-in Image Optimization, your original images are automatically converted to WebP on the server and delivered to supporting browsers, dramatically speeding up page load times.",
    tags: ["webp", "jpeg", "image optimization", "litespeed media", "lcp"]
  },
  {
    id: "kb-048",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "Can I run Elementor and heavy page builders smoothly on Hostamble WordPress hosting?",
    answer: "Yes. Elementor and Divi require high memory and fast single-core CPU execution to render editor widgets without crashing. Hostamble provisions 512MB dedicated PHP memory_limit, modern AMD EPYC high-frequency processors, and SSD NVMe storage, ensuring the Elementor editor loads instantly without spinning wheels.",
    tags: ["elementor", "divi", "page builder", "php memory", "editor speed"]
  },
  {
    id: "kb-049",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "How do I fix the 'Briefly unavailable for scheduled maintenance' error in WordPress?",
    answer: "This error occurs when an update is interrupted before WordPress deletes its temporary maintenance file. In cPanel File Manager, open public_html, ensure hidden dotfiles are visible, locate the '.maintenance' file in the root folder, and delete it. Your site will instantly return to normal.",
    tags: ["scheduled maintenance", ".maintenance", "update stuck", "quick fix"]
  },
  {
    id: "kb-050",
    category: "wordpress",
    categoryLabel: "WordPress & Speed",
    question: "How do I safely update WordPress plugins and themes without site crashes?",
    answer: "Always follow these safety steps: (1) Ensure your automated JetBackup snapshot is active or take a 1-click snapshot before updating. (2) Update plugins one by one rather than clicking 'Update All' so you can pinpoint conflicts. (3) Test major core updates on your 1-Click Staging site first before updating production.",
    tags: ["safe updates", "plugin update", "staging", "jetbackup", "compatibility"]
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CATEGORY 3: WOOCOMMERCE & ECOMMERCE (Questions 51 - 70)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "kb-051",
    category: "woocommerce",
    categoryLabel: "WooCommerce & Store",
    question: "Can I host a high-traffic WooCommerce store on Hostamble WordPress hosting?",
    answer: "Yes. Hostamble WordPress plans are optimized for eCommerce: provisioned on enterprise NVMe storage in RAID-10, MariaDB query acceleration, HTTP/3 protocol, and high CloudLinux LVE memory limits (up to 1GB PHP memory on higher plans) to process concurrent cart checkouts smoothly.",
    tags: ["woocommerce", "ecommerce", "online store", "concurrency"]
  },
  {
    id: "kb-052",
    category: "woocommerce",
    categoryLabel: "WooCommerce & Store",
    question: "Why do WooCommerce cart and checkout pages bypass caching?",
    answer: "Cart, checkout, and 'My Account' pages contain unique, dynamic customer data (items in cart, personal addresses, session tokens) that must never be cached publicly. Caching them would result in customer A seeing customer B's items. LiteSpeed Cache automatically excludes cart, checkout, and account URLs by default.",
    tags: ["caching", "woocommerce cart", "checkout cache", "session data"]
  },
  {
    id: "kb-053",
    category: "woocommerce",
    categoryLabel: "WooCommerce & Store",
    question: "What PHP memory allocation is recommended for WooCommerce stores?",
    answer: "A minimum of 256MB PHP memory is required, but 512MB is strongly recommended for stores with 10+ active plugins (payment gateways, shipping calculators, marketing pixels). Hostamble provides up to 512MB–1GB PHP memory allocations to ensure checkouts never suffer memory exhaustion.",
    tags: ["php memory", "memory_limit", "woocommerce requirements", "scaling"]
  },
  {
    id: "kb-054",
    category: "woocommerce",
    categoryLabel: "WooCommerce & Store",
    question: "How does LiteSpeed Cache handle WooCommerce cart fragments and AJAX calls?",
    answer: "WooCommerce uses wc-ajax=get_refreshed_fragments to update mini-cart icons, which can overload servers on high-traffic sites. LiteSpeed Cache integrates native ESI (Edge Side Includes) and cart fragment caching, reducing get_refreshed_fragments CPU overhead by up to 85%.",
    tags: ["cart fragments", "get_refreshed_fragments", "esi", "ajax speed"]
  },
  {
    id: "kb-055",
    category: "woocommerce",
    categoryLabel: "WooCommerce & Store",
    question: "How do I prepare my WooCommerce store for Black Friday or high-traffic sales surges?",
    answer: "(1) Enable Redis object caching in LiteSpeed Cache to speed up database queries. (2) Optimize all product images with WebP compression. (3) Disable resource-heavy reporting or tracking plugins during the sale. (4) Clean up WooCommerce transients and post revisions. (5) Upgrade your plan tier temporarily if expecting 10x traffic.",
    tags: ["black friday", "flash sale", "traffic surge", "scaling", "redis"]
  },
  {
    id: "kb-056",
    category: "woocommerce",
    categoryLabel: "WooCommerce & Store",
    question: "How do I integrate Indian payment gateways (Razorpay, Cashfree, UPI, PhonePe) in WooCommerce?",
    answer: "Install the official gateway plugin (e.g., 'Razorpay for WooCommerce' or 'Cashfree Payments') from Plugins > Add New. Go to WooCommerce > Settings > Payments, toggle the gateway ON, and click 'Manage'. Enter your Key ID and Key Secret generated from your payment gateway dashboard. Test in sandbox mode, then switch to Live mode.",
    tags: ["razorpay", "cashfree", "upi", "phonepe", "payment gateway", "india"]
  },
  {
    id: "kb-057",
    category: "woocommerce",
    categoryLabel: "WooCommerce & Store",
    question: "How do I integrate Stripe and PayPal for international payments in WooCommerce?",
    answer: "Install the official 'WooCommerce Stripe Payment Gateway' and 'WooCommerce PayPal Payments' plugins. In WooCommerce > Settings > Payments, enable Stripe or PayPal. Connect your account via automated API webhook authorization or manually paste your Publishable Key and Secret Key from your Stripe dashboard.",
    tags: ["stripe", "paypal", "international payments", "credit card"]
  },
  {
    id: "kb-058",
    category: "woocommerce",
    categoryLabel: "WooCommerce & Store",
    question: "How do I ensure automated WooCommerce order confirmation emails don't go to spam?",
    answer: "Always configure custom domain email authentication: (1) Ensure your domain has valid SPF, DKIM, and DMARC TXT records in cPanel Zone Editor. (2) Install an SMTP plugin such as 'WP Mail SMTP'. (3) Authenticate with transactional SMTP credentials rather than relying on default PHP mail() to achieve 99% inbox delivery.",
    tags: ["order emails", "smtp", "spam prevention", "dkim", "spf"]
  },
  {
    id: "kb-059",
    category: "woocommerce",
    categoryLabel: "WooCommerce & Store",
    question: "What is WooCommerce database bloat and how do I clean up expired transients?",
    answer: "WooCommerce generates thousands of temporary database entries called transients for shipping rates and cart sessions. Over time, expired transients slow down database queries. To clean: In WooCommerce > Status > Tools, click 'Clear transients' and 'Clear expired transients'. LiteSpeed DB Optimizer also cleans them automatically.",
    tags: ["transients", "database bloat", "woocommerce tools", "performance"]
  },
  {
    id: "kb-060",
    category: "woocommerce",
    categoryLabel: "WooCommerce & Store",
    question: "How do I fix slow product saving and admin page loads in WooCommerce?",
    answer: "Slow product saves are usually caused by: (1) Disabled OPcache or Redis. Enable Redis in LiteSpeed Cache. (2) Too many custom product variations (>50 attributes). (3) Third-party inventory sync plugins making synchronous external API calls on save. (4) Increase max_input_vars to 5000 in cPanel MultiPHP INI Editor.",
    tags: ["slow product save", "max_input_vars", "redis", "woocommerce admin"]
  },
  {
    id: "kb-061",
    category: "woocommerce",
    categoryLabel: "WooCommerce & Store",
    question: "Does WooCommerce require a dedicated IP address to accept card payments?",
    answer: "No. Modern payment gateways (Razorpay, Stripe, PayPal) use secure hosted tokenization or embedded iframes where payment data never touches your server directly. As long as your domain has an active SSL certificate (HTTPS), a dedicated IP is not mandatory, though it is optional for advanced corporate setups.",
    tags: ["dedicated ip", "pci compliance", "ssl", "card payments"]
  },
  {
    id: "kb-062",
    category: "woocommerce",
    categoryLabel: "WooCommerce & Store",
    question: "How do I prevent fraudulent checkout attempts and card-testing bot attacks?",
    answer: "(1) Enable Google reCAPTCHA v3 or Cloudflare Turnstile on WooCommerce checkout using a security plugin. (2) Enable Imunify360 WAF in cPanel which automatically blocks automated botnets. (3) Configure minimum order amount limits and velocity checks inside your payment gateway dashboard (Razorpay/Stripe).",
    tags: ["fraud prevention", "card testing", "recaptcha", "bot protection"]
  },
  {
    id: "kb-063",
    category: "woocommerce",
    categoryLabel: "WooCommerce & Store",
    question: "How do I optimize high-resolution product photos in WooCommerce without quality loss?",
    answer: "Resize product images to your theme's display dimensions (e.g., 1000x1000px) before uploading rather than uploading 4000px raw camera photos. Use LiteSpeed Cache > Image Optimization to compress them automatically to WebP format, reducing image weight by up to 70% while preserving sharpness.",
    tags: ["product images", "image optimization", "webp", "catalog speed"]
  },
  {
    id: "kb-064",
    category: "woocommerce",
    categoryLabel: "WooCommerce & Store",
    question: "Can I sell digital downloadable files (e-books, software) securely on WooCommerce?",
    answer: "Yes. In WooCommerce > Settings > Products > Downloadable products, set File Download Method to 'Force downloads' or 'X-Accel-Redirect/X-Sendfile'. Check 'Downloads require login' and uncheck 'Grant access after payment' if manual review is desired. Files stored outside public_html cannot be accessed via direct URL.",
    tags: ["digital products", "downloads", "force download", "secure files"]
  },
  {
    id: "kb-065",
    category: "woocommerce",
    categoryLabel: "WooCommerce & Store",
    question: "How do I configure automated PDF invoice generation in WooCommerce?",
    answer: "Install the free 'WooCommerce PDF Invoices & Packing Slips' plugin. Navigate to WooCommerce > PDF Invoices, upload your company logo, set your business address and GST tax details. Invoices will automatically attach to customer 'Order Complete' emails and be available for download in customer accounts.",
    tags: ["pdf invoice", "gst invoice", "packing slips", "automated receipts"]
  },
  {
    id: "kb-066",
    category: "woocommerce",
    categoryLabel: "WooCommerce & Store",
    question: "What is the maximum number of products I can host on Hostamble WordPress plans?",
    answer: "There is no artificial limit on the number of products you can create in WooCommerce. Stores with 500 to 10,000+ products run smoothly provided storage quotas are maintained and database indexes are optimized. For catalog sizes exceeding 25,000 SKUs, high-tier plans with 1GB+ PHP memory are recommended.",
    tags: ["product limit", "catalog size", "skus", "database limits"]
  },
  {
    id: "kb-067",
    category: "woocommerce",
    categoryLabel: "WooCommerce & Store",
    question: "How do I set up multi-currency pricing in WooCommerce?",
    answer: "Install a multi-currency plugin such as 'WOOCS - WooCommerce Currency Switcher' or 'CURCY'. Define your base store currency (e.g., INR) and secondary currencies (USD, EUR, GBP). Configure automatic exchange rate updates via Open Exchange Rates or set fixed pricing per currency.",
    tags: ["multi currency", "currency switcher", "inr usd", "exchange rates"]
  },
  {
    id: "kb-068",
    category: "woocommerce",
    categoryLabel: "WooCommerce & Store",
    question: "How do I migrate an active WooCommerce store with incoming orders without data loss?",
    answer: "Follow our zero-downtime procedure: (1) Clone site files and database to Hostamble. (2) Lower DNS TTL to 300 seconds. (3) Temporarily put the old store into maintenance mode for 5 minutes during off-peak hours. (4) Run a delta database sync to copy the latest orders. (5) Switch domain nameservers to Hostamble and disable maintenance mode.",
    tags: ["woocommerce migration", "live orders", "zero data loss", "delta sync"]
  },
  {
    id: "kb-069",
    category: "woocommerce",
    categoryLabel: "WooCommerce & Store",
    question: "How do I enable LiteSpeed ESI for personalized WooCommerce cart widgets?",
    answer: "In WordPress admin, go to LiteSpeed Cache > 'Cache' > 'ESI' and toggle 'Enable ESI' to ON. Enable 'ESI Nonce'. ESI allows the main page to be served from static server cache while dynamic elements (like cart item counts and logged-in user names) are hole-punched and fetched dynamically without full page reloads.",
    tags: ["esi", "edge side includes", "hole punching", "mini cart"]
  },
  {
    id: "kb-070",
    category: "woocommerce",
    categoryLabel: "WooCommerce & Store",
    question: "How do I schedule automatic nightly WooCommerce database backups?",
    answer: "Automated daily backups are enabled by default through JetBackup 5 on all Hostamble plans. Additionally, you can install plugins like 'UpdraftPlus' to send nightly automated database-only backups directly to your personal Google Drive or Dropbox storage for extra redundancy.",
    tags: ["database backup", "nightly backup", "updraftplus", "jetbackup"]
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CATEGORY 4: DOMAINS, DNS & NAMESERVERS (Questions 71 - 95)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "kb-071",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "How do I point my domain name to Hostamble nameservers?",
    answer: "Log into the registrar where your domain is registered (GoDaddy, Namecheap, Google Domains/Squarespace, etc.). Locate 'DNS Management' or 'Nameservers', select 'Custom Nameservers', and enter Hostamble's primary nameservers provided in your welcome email: ns1.hostamble.com and ns2.hostamble.com. Click Save.",
    tags: ["nameservers", "point domain", "custom nameservers", "dns setup"]
  },
  {
    id: "kb-072",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "What is DNS propagation and why does it take 1 to 24 hours?",
    answer: "DNS propagation is the timeframe required for internet service providers (ISPs) and recursive DNS caches worldwide to update their records with your new nameserver information. While most local networks update within 1 to 4 hours, complete global propagation can take up to 24 hours depending on the old TTL (Time to Live) settings.",
    tags: ["dns propagation", "ttl", "nameserver update", "propagation time"]
  },
  {
    id: "kb-073",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "What is an A Record and how do I point my domain to an IP address?",
    answer: "An 'A' (Address) Record maps your domain name (e.g., example.com) to a specific server IPv4 address (e.g., 103.150.x.x). In cPanel, navigate to 'Zone Editor', click 'Manage' next to your domain, find your root A record, click 'Edit', paste the target server IP address, and click 'Save Record'.",
    tags: ["a record", "ip address", "zone editor", "dns mapping"]
  },
  {
    id: "kb-074",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "What is a CNAME Record and when should I use it instead of an A Record?",
    answer: "A CNAME (Canonical Name) Record aliases one domain name to another hostname rather than directly to an IP address. For example, pointing 'www.example.com' to 'example.com' or pointing a blog subdomain to an external service like Shopify or GitHub Pages. CNAME records cannot be used for the root naked domain (@), only subdomains.",
    tags: ["cname", "canonical name", "alias", "subdomain mapping"]
  },
  {
    id: "kb-075",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "What is an MX Record and how do I point email to Google Workspace or Microsoft 365?",
    answer: "An MX (Mail Exchange) record directs incoming emails for your domain to designated mail servers. In cPanel > Zone Editor, delete any default local MX records and add Google Workspace MX records (e.g., ASPMX.L.GOOGLE.COM with priority 1). In cPanel 'Email Routing', change the setting from 'Local Mail Exchanger' to 'Remote Mail Exchanger'.",
    tags: ["mx record", "google workspace", "microsoft 365", "email routing"]
  },
  {
    id: "kb-076",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "What is a TXT Record and how do I add SPF, DKIM, and DMARC for email security?",
    answer: "A TXT record stores arbitrary text data used primarily for domain ownership verification (Google Search Console) and anti-spoofing email protocols. In cPanel Zone Editor, click 'Add Record' > 'TXT'. Enter your domain in Name and paste your SPF record (e.g., 'v=spf1 +a +mx ~all') or DMARC record in Record, then click 'Save'.",
    tags: ["txt record", "spf", "dkim", "dmarc", "email verification"]
  },
  {
    id: "kb-077",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "How do I create a subdomain (e.g., blog.yourdomain.com) in cPanel?",
    answer: "In cPanel, click 'Domains' under the Domains section. Click 'Create a New Domain'. In the domain field, enter your full subdomain name (e.g., blog.yourdomain.com). Uncheck 'Share document root' to assign it an isolated directory (e.g., /public_html/blog), and click 'Submit'.",
    tags: ["subdomain", "create subdomain", "document root", "domains"]
  },
  {
    id: "kb-078",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "How do I add an Addon Domain to host a second independent website in cPanel?",
    answer: "In cPanel > 'Domains', click 'Create a New Domain'. Type your new domain name (e.g., mysecondsite.com). Ensure 'Share document root' is unchecked so it creates a distinct root directory (/public_html/mysecondsite). Click 'Submit'. Point the new domain's nameservers to Hostamble to serve the new site.",
    tags: ["addon domain", "second website", "multi domain", "cpanel domains"]
  },
  {
    id: "kb-079",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "What is an EPP / Authorization transfer code and how do I retrieve it?",
    answer: "An EPP code (also called Auth-Code or Transfer Secret) is a unique alphanumeric password generated by your domain registrar to verify that you are the legitimate owner requesting a domain transfer. You can find or request this code in your current registrar's domain management portal under 'Transfer Out' or 'Auth-Info'.",
    tags: ["epp code", "auth code", "transfer secret", "domain transfer"]
  },
  {
    id: "kb-080",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "How long does a domain transfer take and will my website go offline during the transfer?",
    answer: "A standard domain transfer takes between 5 to 7 days according to ICANN registry rules. Your website will NOT go offline because nameservers remain completely unchanged throughout the transfer process as long as your DNS records remain hosted on your active server.",
    tags: ["transfer time", "zero downtime", "icann", "domain transfer"]
  },
  {
    id: "kb-081",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "What is Domain WHOIS Privacy Protection and why should I enable it?",
    answer: "WHOIS Privacy masks your personal contact information (legal name, home address, phone number, and personal email) in public registry lookups with proxy registrar details. Without it, telemarketers, spammers, and scammers harvest your contact details. Hostamble provides free WHOIS privacy on eligible TLDs.",
    tags: ["whois privacy", "id protection", "spam prevention", "privacy"]
  },
  {
    id: "kb-082",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "What is Domain Registrar Lock and how does it prevent unauthorized domain transfers?",
    answer: "Registrar Lock (ClientTransferProhibited status) is an ICANN security measure that blocks unauthorized attempts to transfer your domain to another provider. You should keep Registrar Lock enabled at all times, only unlocking it temporarily when you intentionally initiate a domain transfer.",
    tags: ["registrar lock", "transfer lock", "domain theft", "security"]
  },
  {
    id: "kb-083",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "What is DNSSEC and does Hostamble support it?",
    answer: "DNSSEC (Domain Name System Security Extensions) adds cryptographic digital signatures to your DNS records. This prevents DNS spoofing, cache poisoning, and man-in-the-middle attacks where visitors could be rerouted to fake phishing sites. Hostamble supports full DNSSEC key management in the client portal.",
    tags: ["dnssec", "dns security", "cache poisoning", "cryptography"]
  },
  {
    id: "kb-084",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "What happens when a domain expires and what is the renewal grace period?",
    answer: "When a domain expires, it enters an 'Auto-Renew Grace Period' (typically 30–40 days) where the owner can still renew at normal rates. After this, it enters a 'Redemption Period' (30 days) where registries charge high redemption fees ($80–$150). After redemption, the domain is permanently deleted and released to the public.",
    tags: ["expired domain", "grace period", "redemption period", "domain renewal"]
  },
  {
    id: "kb-085",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "What is the difference between generic TLDs (.com, .org) and country-code TLDs (.in, .co.in)?",
    answer: "Generic TLDs (gTLDs) like .com and .org have global recognition and are ideal for international businesses. Country-code TLDs (ccTLDs) like .in and .co.in are specific to geographical territories (India), signaling strong local trust and giving ranking priority in Google India (google.co.in) local search queries.",
    tags: ["gtld", "cctld", ".com vs .in", "domain extension", "seo"]
  },
  {
    id: "kb-086",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "Can I transfer a domain registered less than 60 days ago?",
    answer: "No. ICANN enforces a mandatory 60-day transfer lock following any new domain registration or previous registrar transfer. You must wait until day 61 to transfer your domain to Hostamble. In the meantime, you can point your existing domain to Hostamble nameservers immediately with zero waiting.",
    tags: ["60 day lock", "icann rule", "domain transfer", "new registration"]
  },
  {
    id: "kb-087",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "How do I redirect non-www to www (or www to non-www) using .htaccess?",
    answer: "To force 'www.yourdomain.com', add to public_html/.htaccess: 'RewriteEngine On RewriteCond %{HTTP_HOST} ^yourdomain\\.com [NC] RewriteRule ^(.*)$ https://www.yourdomain.com/$1 [L,R=301]'. To force non-www, change the condition to match www and redirect to naked domain. Always verify canonical URLs match in WordPress Settings.",
    tags: ["non-www to www", "canonical redirect", "301 rewrite", "htaccess"]
  },
  {
    id: "kb-088",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "How do I point my domain to Shopify while keeping hosting on Hostamble?",
    answer: "In cPanel > Zone Editor, locate your domain's root A record (@) and point it to Shopify's IP: 23.227.38.65. Next, create or edit the 'www' CNAME record to point to 'shops.myshopify.com'. Click 'Verify connection' in your Shopify admin dashboard.",
    tags: ["shopify", "point to shopify", "cname", "ecommerce dns"]
  },
  {
    id: "kb-089",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "How do I verify domain ownership in Google Search Console using a DNS TXT record?",
    answer: "In Google Search Console, choose 'Domain' property and copy the provided TXT verification string (e.g., google-site-verification=xxxx). In cPanel > Zone Editor, click 'Add Record' > 'TXT', enter your domain name in Name, paste the string into Record, and save. Click 'Verify' in Search Console.",
    tags: ["google search console", "txt verification", "dns verification", "seo"]
  },
  {
    id: "kb-090",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "What is Anycast DNS and how does it speed up website access?",
    answer: "Anycast DNS distributes identical DNS server records across dozens of global geographical data centers sharing the same IP address. When a visitor's browser requests your domain, the request routes automatically to the physically nearest DNS node, reducing DNS lookup latency from 150ms down to under 15ms.",
    tags: ["anycast dns", "dns speed", "lookup time", "low latency"]
  },
  {
    id: "kb-091",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "How do I create custom child nameservers (e.g., ns1.mybrand.com)?",
    answer: "In your Hostamble client portal, navigate to My Domains > Manage Domain > 'Private Nameservers' (Glue Records). Enter 'ns1' with your primary server IP address and 'ns2' with your secondary IP address, then click Save. In cPanel Zone Editor, add corresponding 'A' records for ns1 and ns2.",
    tags: ["child nameservers", "glue records", "private nameservers", "branding"]
  },
  {
    id: "kb-092",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "What is an SPF record and why is it needed for domain email delivery?",
    answer: "SPF (Sender Policy Framework) is a DNS TXT record specifying authorized mail servers permitted to send email on behalf of your domain name. Receiving mail providers (Gmail, Yahoo, Outlook) check this record; without it, emails sent from your domain are heavily flagged as phishing or routed to spam folders.",
    tags: ["spf", "email deliverability", "txt record", "spam prevention"]
  },
  {
    id: "kb-093",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "What is DKIM and how do I enable it in cPanel?",
    answer: "DKIM (DomainKeys Identified Mail) adds an encrypted digital signature to email headers matching a public cryptographic key in your DNS. In cPanel, click 'Email Deliverability' under Email. Locate your domain and click 'Manage'. Click 'Install' to automatically publish DKIM and SPF records to your DNS zone.",
    tags: ["dkim", "email deliverability", "cryptographic signature", "cpanel email"]
  },
  {
    id: "kb-094",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "What is a DMARC policy and what record should I add to my domain?",
    answer: "DMARC (Domain-based Message Authentication, Reporting, and Conformance) tells receiving servers how to handle emails that fail SPF or DKIM checks. To create a monitoring DMARC record, add a TXT record for '_dmarc.yourdomain.com' with the value: 'v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com'.",
    tags: ["dmarc", "email security", "phishing protection", "dmarc policy"]
  },
  {
    id: "kb-095",
    category: "domains",
    categoryLabel: "Domains & DNS",
    question: "Can I use Cloudflare CDN with Hostamble hosting?",
    answer: "Yes, 100% compatible. In your Cloudflare dashboard, add your domain, import your existing DNS records, and update your domain registrar nameservers to Cloudflare's assigned nameservers. LiteSpeed Cache also includes a native Cloudflare API integration in WordPress admin to purge edge cache automatically.",
    tags: ["cloudflare", "cdn", "nameservers", "ddos", "lscache cloudflare"]
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CATEGORY 5: SECURITY, SSL & MALWARE DEFENSE (Questions 96 - 115)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "kb-096",
    category: "security",
    categoryLabel: "Security & SSL",
    question: "How does Imunify360 AI protection safeguard my hosting account?",
    answer: "Imunify360 is an enterprise multi-layer security suite running directly on Hostamble servers. It combines a real-time kernel-level Web Application Firewall (WAF), heuristic proactive malware detection, automated malware cleanup, reputation management, and automated brute-force login throttling to block threats before they reach your site.",
    tags: ["imunify360", "malware", "ai security", "waf", "kernel security"]
  },
  {
    id: "kb-097",
    category: "security",
    categoryLabel: "Security & SSL",
    question: "Does Imunify360 automatically clean up infected malware files?",
    answer: "Yes. When Imunify360 detects malicious code injected into PHP scripts, it uses automated file de-infection algorithms to trim the malware while preserving the original plugin or theme code. In cPanel, click 'Imunify360' to view quarantined files, scan history, and restore cleaned files with one click.",
    tags: ["malware cleanup", "auto quarantine", "disinfection", "imunify dashboard"]
  },
  {
    id: "kb-098",
    category: "security",
    categoryLabel: "Security & SSL",
    question: "What is a Web Application Firewall (WAF) and how does it stop zero-day exploits?",
    answer: "A Web Application Firewall monitors, filters, and blocks malicious HTTP traffic arriving at your website. By matching patterns against extensive global threat intelligence feeds, the WAF neutralizes SQL injections, cross-site scripting (XSS), remote file inclusion, and zero-day vulnerabilities in outdated WordPress plugins.",
    tags: ["waf", "firewall", "sql injection", "xss", "zero-day"]
  },
  {
    id: "kb-099",
    category: "security",
    categoryLabel: "Security & SSL",
    question: "Does Hostamble provide free SSL certificates and how do they renew?",
    answer: "Yes. Every hosting account includes automated Let's Encrypt Wildcard SSL certificates. The AutoSSL engine issues certificates within 30 minutes of connecting nameservers and automatically re-issues renewals every 90 days in the background with zero downtime and no manual intervention required.",
    tags: ["free ssl", "let's encrypt", "autossl", "auto renewal", "padlock"]
  },
  {
    id: "kb-100",
    category: "security",
    categoryLabel: "Security & SSL",
    question: "How do I force all HTTP visitor traffic to secure HTTPS in cPanel?",
    answer: "Navigate to cPanel > 'Domains'. In the list of domains, locate your website and toggle the 'Force HTTPS Redirect' switch to 'ON'. cPanel automatically writes server-level rewrite rules, ensuring all http:// URLs redirect seamlessly to secure https:// with a 301 status.",
    tags: ["force https", "https redirect", "ssl toggle", "cpanel domains"]
  },
  {
    id: "kb-101",
    category: "security",
    categoryLabel: "Security & SSL",
    question: "What is an SSL Wildcard certificate and does it cover all subdomains?",
    answer: "A Wildcard SSL certificate (*.yourdomain.com) encrypts your main domain and an unlimited number of first-level subdomains (e.g., app.yourdomain.com, store.yourdomain.com, blog.yourdomain.com) under a single cryptographic certificate. Hostamble includes free Wildcard SSL support on all plans.",
    tags: ["wildcard ssl", "subdomain ssl", "encryption", "https"]
  },
  {
    id: "kb-102",
    category: "security",
    categoryLabel: "Security & SSL",
    question: "What is the difference between free Let's Encrypt SSL and paid commercial SSL?",
    answer: "Both free Let's Encrypt and paid commercial SSL provide identical 256-bit TLS encryption and green padlocks. Commercial SSL certificates (Sectigo, PositiveSSL) include financial warranty insurance ($10,000–$1,000,000), organization validation (OV/EV), and dynamic site seal badges suitable for corporate and banking portals.",
    tags: ["free vs paid ssl", "let's encrypt vs sectigo", "warranty", "ev ssl"]
  },
  {
    id: "kb-103",
    category: "security",
    categoryLabel: "Security & SSL",
    question: "How does Hostamble protect my website against volumetric DDoS attacks?",
    answer: "Hostamble servers are protected by upstream enterprise anti-DDoS scrubbing infrastructure with over 10 Tbps network capacity. Volumetric attacks (UDP floods, SYN floods, NTP amplification) are detected and filtered at network border routers within milliseconds before reaching your hosting container.",
    tags: ["ddos protection", "ddos mitigation", "anti-ddos", "network scrubbing"]
  },
  {
    id: "kb-104",
    category: "security",
    categoryLabel: "Security & SSL",
    question: "How do I prevent brute-force attacks on my WordPress login page?",
    answer: "(1) Imunify360 automatically blocks IPs attempting multiple failed passwords. (2) Change your default admin username from 'admin' to a unique name. (3) Install a 2FA plugin like 'Two Factor' or enable Cloudflare Turnstile on /wp-login.php. (4) Limit login attempts with plugins like 'Limit Login Attempts Reloaded'.",
    tags: ["brute force", "wp-login protection", "2fa", "limit login attempts"]
  },
  {
    id: "kb-105",
    category: "security",
    categoryLabel: "Security & SSL",
    question: "What is Two-Factor Authentication (2FA) in cPanel and how do I enable it?",
    answer: "2FA adds an extra layer of security requiring your smartphone authenticator app (Google Authenticator, Authy) in addition to your password. In cPanel, click 'Two-Factor Authentication' under Security. Click 'Set Up Two-Factor Authentication', scan the QR code with your app, enter the 6-digit verification code, and click 'Configure'.",
    tags: ["2fa", "two-factor authentication", "cpanel security", "authenticator app"]
  },
  {
    id: "kb-106",
    category: "security",
    categoryLabel: "Security & SSL",
    question: "How do I run an on-demand malware scan on my hosting account?",
    answer: "In cPanel, click 'Imunify360' under Security. Navigate to the 'Malware Scanner' tab and click 'Start scanning'. Imunify360 scans all files, PHP scripts, and theme assets across public_html, providing a detailed report of malicious files, suspicious code injections, and quarantined threats.",
    tags: ["malware scan", "on-demand scan", "imunify scanner", "scan files"]
  },
  {
    id: "kb-107",
    category: "security",
    categoryLabel: "Security & SSL",
    question: "Why do outdated plugins cause 90% of WordPress website hacks?",
    answer: "When vulnerability researchers discover bugs in plugins (SQL injection, privilege escalation, remote code execution), developers release patched updates. Attackers analyze these patches to write automated bot exploits targeting websites that have not yet updated. Keeping plugins updated eliminates these attack vectors.",
    tags: ["outdated plugins", "wordpress hacks", "vulnerabilities", "plugin security"]
  },
  {
    id: "kb-108",
    category: "security",
    categoryLabel: "Security & SSL",
    question: "What CHMOD file and folder permissions are required for WordPress security?",
    answer: "Standard security permissions are: Folders and directories must be set to 755 (rwxr-xr-x), and files must be set to 644 (rw-r--r--). The wp-config.php file can be hardened to 600 or 640 so unauthorized server users cannot read database passwords. Never set any folder or file to 777.",
    tags: ["chmod", "file permissions", "755 644", "wp-config permissions"]
  },
  {
    id: "kb-109",
    category: "security",
    categoryLabel: "Security & SSL",
    question: "What is CloudLinux CageFS and how does it isolate user files on the server?",
    answer: "CageFS is a virtualized per-user file system that encapsulates each cPanel user in an isolated 'cage'. Users cannot see server configuration files, /etc/passwd entries, or neighboring customer accounts. Even if another account on the server is compromised, CageFS prevents the attacker from viewing or jumping into your files.",
    tags: ["cagefs", "cloudlinux", "virtualized file system", "server isolation"]
  },
  {
    id: "kb-110",
    category: "security",
    categoryLabel: "Security & SSL",
    question: "How do I disable directory browsing (Indexes) in cPanel to protect file listings?",
    answer: "By default, directories lacking an index.html file may display all folder contents to browsers. In cPanel, click 'Indexes' under Advanced. Select public_html, choose 'No Indexing', and click Save. Alternatively, add 'Options -Indexes' to your public_html/.htaccess file.",
    tags: ["options -indexes", "directory browsing", "hide files", "htaccess"]
  },
  {
    id: "kb-111",
    category: "security",
    categoryLabel: "Security & SSL",
    question: "How do I protect wp-config.php from being read by unauthorized visitors?",
    answer: "Add this protection rule to your public_html/.htaccess file: '<Files wp-config.php> Order Allow,Deny Deny from all </Files>'. This blocks direct browser HTTP access to your database credentials while allowing internal server PHP scripts to execute normally.",
    tags: ["protect wp-config", "htaccess security", "database credentials"]
  },
  {
    id: "kb-112",
    category: "security",
    categoryLabel: "Security & SSL",
    question: "What should I do immediately if my website gets compromised or defaced?",
    answer: "(1) Change your cPanel, FTP, and WordPress admin passwords immediately. (2) Open cPanel > JetBackup 5 and restore the most recent clean daily snapshot from before the intrusion. (3) Run an Imunify360 scan to disinfect any remaining files. (4) Update all plugins, themes, and WordPress core. (5) Contact Hostamble support for assistance.",
    tags: ["hacked website", "recovery steps", "restore snapshot", "passwords"]
  },
  {
    id: "kb-113",
    category: "security",
    categoryLabel: "Security & SSL",
    question: "How do I request a Google Safe Browsing malware review after cleaning my site?",
    answer: "Log into Google Search Console, navigate to 'Security & Manual Actions' > 'Security Issues'. Review the listed flagged URLs to ensure they are cleaned. Click 'Request Review', explain the cleanup steps taken (malware removed, passwords rotated, CMS updated), and submit. Google reviews and removes the warning within 24 to 72 hours.",
    tags: ["google safe browsing", "red warning screen", "request review", "search console"]
  },
  {
    id: "kb-114",
    category: "security",
    categoryLabel: "Security & SSL",
    question: "How do I block aggressive bad bot scrapers using .htaccess?",
    answer: "Add user-agent blocking rules in public_html/.htaccess: 'RewriteEngine On RewriteCond %{HTTP_USER_AGENT} (SemrushBot|AhrefsBot|MJ12bot|DotBot) [NC] RewriteRule .* - [F,L]'. This immediately terminates requests from aggressive scrapers with a 403 Forbidden header, saving server CPU and bandwidth.",
    tags: ["block bots", "bad bots", "user agent", "save bandwidth", "htaccess"]
  },
  {
    id: "kb-115",
    category: "security",
    categoryLabel: "Security & SSL",
    question: "What is TLS 1.3 and why is it faster and more secure than TLS 1.2?",
    answer: "TLS 1.3 is the latest cryptographic protocol that secures HTTPS connections. It reduces the handshake latency from two round-trips to just one round-trip (1-RTT) and supports 0-RTT resumption, speeding up secure page loads while stripping out obsolete, vulnerable cipher suites.",
    tags: ["tls 1.3", "encryption", "handshake latency", "https security"]
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CATEGORY 6: BACKUPS, RESTORES & MIGRATION (Questions 116 - 135)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "kb-116",
    category: "backups",
    categoryLabel: "Backups & Migration",
    question: "How do automated daily backups work with JetBackup 5 in cPanel?",
    answer: "JetBackup 5 runs automated offsite snapshots every 24 hours while your server is idle. It captures complete account state: public_html files, MySQL databases, cron jobs, DNS zones, and email accounts. Snapshots are stored on redundant remote backup storage nodes completely separate from web servers.",
    tags: ["jetbackup 5", "daily backups", "offsite storage", "automated snapshots"]
  },
  {
    id: "kb-117",
    category: "backups",
    categoryLabel: "Backups & Migration",
    question: "How do I restore a single file or directory from JetBackup 5 in cPanel?",
    answer: "In cPanel, click 'JetBackup 5' under Files. Click 'File Backups', select the snapshot date you wish to restore from, and click 'Show Files'. Browse your directories, select the specific files or folders you need, and click 'Restore Selected Files'. Restoration completes in seconds without affecting other files.",
    tags: ["restore file", "jetbackup restore", "single file restore", "cpanel"]
  },
  {
    id: "kb-118",
    category: "backups",
    categoryLabel: "Backups & Migration",
    question: "How do I restore a single MySQL database from JetBackup 5?",
    answer: "Open cPanel > 'JetBackup 5' > 'Database Backups'. Choose the snapshot date from the list, find the specific database you wish to restore, click 'Restore', and confirm. JetBackup rolls back the database tables to the exact selected point in time.",
    tags: ["restore database", "mysql rollback", "jetbackup database"]
  },
  {
    id: "kb-119",
    category: "backups",
    categoryLabel: "Backups & Migration",
    question: "How many days of backup snapshots does Hostamble retain?",
    answer: "Hostamble retains rolling daily snapshots covering the previous 7 to 30 days depending on your hosting tier. You can restore from yesterday's snapshot or roll back several days if you only recently noticed an issue.",
    tags: ["backup retention", "retention period", "rolling backups", "snapshots"]
  },
  {
    id: "kb-120",
    category: "backups",
    categoryLabel: "Backups & Migration",
    question: "How does Hostamble's 100% Free Website Migration service work?",
    answer: "Our expert migration engineers move your files, databases, and emails for free: (1) Sign up for any Hostamble hosting plan. (2) Submit a migration ticket with your old host's cPanel login or FTP/database credentials. (3) Our team copies everything and previews the site. (4) You switch domain nameservers with zero downtime.",
    tags: ["free migration", "website transfer", "switch host", "white-glove migration"]
  },
  {
    id: "kb-121",
    category: "backups",
    categoryLabel: "Backups & Migration",
    question: "Will my website go offline during the migration to Hostamble?",
    answer: "No. Your website remains 100% online throughout migration. Because your old hosting account remains live while we copy data to Hostamble, visitors continue viewing your existing site. Once the transferred site is tested and DNS is updated, traffic transitions seamlessly without downtime.",
    tags: ["zero downtime", "migration downtime", "seamless transfer"]
  },
  {
    id: "kb-122",
    category: "backups",
    categoryLabel: "Backups & Migration",
    question: "How do I preview and test my migrated website before changing domain nameservers?",
    answer: "You can preview your website using your local 'hosts' file: Open Notepad as Administrator, edit 'C:\\Windows\\System32\\drivers\\etc\\hosts', and add a line mapping your Hostamble server IP to your domain name (e.g., '103.150.x.x yourdomain.com'). Save the file and open your browser to test your site on Hostamble servers before going live.",
    tags: ["hosts file", "preview site", "test migration", "dns test"]
  },
  {
    id: "kb-123",
    category: "backups",
    categoryLabel: "Backups & Migration",
    question: "Can Hostamble migrate websites from non-cPanel providers (DirectAdmin, Plesk, Hostinger)?",
    answer: "Yes. While cPanel-to-cPanel migrations are instantaneous using full backup archives, our engineers routinely perform manual migrations from non-cPanel dashboards (DirectAdmin, Plesk, hPanel, CyberPanel) by migrating files over SFTP and importing database dumps manually.",
    tags: ["directadmin", "plesk", "hostinger", "manual migration", "hpanel"]
  },
  {
    id: "kb-124",
    category: "backups",
    categoryLabel: "Backups & Migration",
    question: "What information do I need to provide when requesting a free website migration?",
    answer: "When opening a migration ticket, provide: (1) Your current hosting provider name. (2) Login URL, username, and password for your old hosting control panel (cPanel/DirectAdmin/FTP). (3) The domain name(s) to migrate. (4) Any specific instructions (e.g., WordPress admin credentials if manual plugin migration is required).",
    tags: ["migration request", "ticket details", "credentials", "migration info"]
  },
  {
    id: "kb-125",
    category: "backups",
    categoryLabel: "Backups & Migration",
    question: "How long does a website migration typically take?",
    answer: "Standard WordPress and shared hosting migrations typically complete within 1 to 4 hours from the time credentials are submitted. Larger websites (>20GB) or accounts with extensive email mailboxes may take a few additional hours to transfer over high-speed secure sync channels.",
    tags: ["migration time", "transfer duration", "speed"]
  },
  {
    id: "kb-126",
    category: "backups",
    categoryLabel: "Backups & Migration",
    question: "How do I manually migrate a WordPress site using the All-in-One WP Migration plugin?",
    answer: "On your old site: Install 'All-in-One WP Migration', go to Export > 'Export to File', and download the .wpress archive. On your Hostamble site: Install WordPress using Softaculous, install 'All-in-One WP Migration', go to Import > 'Import from File', and upload the .wpress archive. Once finished, save permalinks in Settings > Permalinks.",
    tags: ["all in one wp migration", "wpress", "manual migration", "plugin transfer"]
  },
  {
    id: "kb-127",
    category: "backups",
    categoryLabel: "Backups & Migration",
    question: "How do I export and import large MySQL databases that exceed phpMyAdmin upload limits?",
    answer: "For databases over 100MB: In cPanel, open Terminal (SSH). To export: 'mysqldump -u dbuser -p dbname > backup.sql'. To import: 'mysql -u dbuser -p dbname < backup.sql'. This bypasses browser timeouts and imports multi-gigabyte databases in seconds.",
    tags: ["mysqldump", "large database", "ssh import", "cli database"]
  },
  {
    id: "kb-128",
    category: "backups",
    categoryLabel: "Backups & Migration",
    question: "How do I replace old domain URLs in the database after migrating to a new domain?",
    answer: "Never do a raw SQL find-and-replace, as WordPress uses PHP serialized strings. Use the 'Better Search Replace' plugin or WP-CLI: 'wp search-replace \\'https://olddomain.com\\' \\'https://newdomain.com\\' --all-tables'. This safely updates URLs without breaking serialized array lengths.",
    tags: ["search replace", "serialized data", "wp-cli", "change domain urls"]
  },
  {
    id: "kb-129",
    category: "backups",
    categoryLabel: "Backups & Migration",
    question: "When is it safe to cancel my old hosting account after migrating to Hostamble?",
    answer: "Wait at least 48 to 72 hours after updating your domain nameservers before canceling your old hosting account. This ensures all global DNS caches have completely expired and all visitor traffic and incoming emails are routing exclusively to Hostamble.",
    tags: ["cancel old host", "dns propagation", "safe cancellation"]
  },
  {
    id: "kb-130",
    category: "backups",
    categoryLabel: "Backups & Migration",
    question: "How do I restore an entire cPanel account using a full cPanel backup file?",
    answer: "If you have a full cPanel backup file (e.g., backup-MM.DD.YYYY_cpaneluser.tar.gz), upload it to your home directory. Open a quick support ticket and our server administrators will run the native cPanel restoration script (/scripts/restorepkg) to restore your account state with 100% fidelity.",
    tags: ["restorepkg", "full backup restore", "tar.gz", "cpanel migration"]
  },
  {
    id: "kb-131",
    category: "backups",
    categoryLabel: "Backups & Migration",
    question: "Can I download an offsite copy of my JetBackup snapshot to my local computer?",
    answer: "Yes. In cPanel > JetBackup 5, select 'Full Backups' or 'File Backups', choose the snapshot date, and click 'Generate Download'. JetBackup compiles the archive in the background. Once ready, click 'Download' to save the .tar.gz archive to your computer.",
    tags: ["download jetbackup", "offline backup", "local archive"]
  },
  {
    id: "kb-132",
    category: "backups",
    categoryLabel: "Backups & Migration",
    question: "How do I configure automatic offsite backups to Google Drive using UpdraftPlus?",
    answer: "In WordPress admin, install 'UpdraftPlus'. Navigate to Settings > UpdraftPlus > 'Settings'. Choose your backup schedule (e.g., Daily for files and database). Under 'Choose your remote storage', click 'Google Drive', authenticate with your Google account, and click Save. Backups will automatically transfer to your Google Drive.",
    tags: ["updraftplus", "google drive backup", "remote backup", "wordpress backups"]
  },
  {
    id: "kb-133",
    category: "backups",
    categoryLabel: "Backups & Migration",
    question: "Are daily backups stored on the same server disk or on separate remote hardware?",
    answer: "Hostamble JetBackup snapshots are stored on independent, isolated backup storage clusters located in separate network zones. If a server hardware issue ever occurs, your backup snapshots remain completely unaffected and accessible for immediate restoration.",
    tags: ["remote storage", "independent backups", "disaster recovery"]
  },
  {
    id: "kb-134",
    category: "backups",
    categoryLabel: "Backups & Migration",
    question: "How do I restore cron jobs or DNS records from a JetBackup snapshot?",
    answer: "Open cPanel > JetBackup 5. Click 'Cron Job Backups' or 'DNS Zone Backups'. Select your desired snapshot date, click 'Restore', and confirm. JetBackup reinstates your previous cron schedules or DNS zone records without altering your files or databases.",
    tags: ["restore cron", "restore dns", "jetbackup granular"]
  },
  {
    id: "kb-135",
    category: "backups",
    categoryLabel: "Backups & Migration",
    question: "Can I restore a WordPress site backup created on another hosting company into Hostamble?",
    answer: "Yes. If you have an UpdraftPlus backup (.zip), an All-in-One WP Migration file (.wpress), or a standard .sql database dump and wp-content folder, you can restore them into your Hostamble WordPress installation with full compatibility.",
    tags: ["restore from another host", "cross host restore", "wp migration"]
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CATEGORY 7: HARDWARE, CLOUDLINUX & NETWORK (Questions 136 - 145)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "kb-136",
    category: "hardware",
    categoryLabel: "Hardware & Network",
    question: "What enterprise processor hardware powers Hostamble hosting nodes?",
    answer: "Hostamble servers are powered by enterprise-grade multi-core AMD EPYC processors and Intel Xeon scalable CPUs with DDR5 ECC registered memory. These processors deliver exceptional single-core clock speeds to accelerate PHP execution times and handle database concurrency effortlessly.",
    tags: ["amd epyc", "processors", "ddr5 ecc", "server hardware", "cpu speed"]
  },
  {
    id: "kb-137",
    category: "hardware",
    categoryLabel: "Hardware & Network",
    question: "Why is PCIe 4.0 NVMe storage up to 7x faster than traditional SATA SSDs?",
    answer: "Traditional SATA SSDs are bottle-necked by legacy 6 Gbps SATA cables (max ~550 MB/s). PCIe 4.0 NVMe SSDs connect directly to the CPU over high-speed PCI Express lanes, delivering transfer speeds up to 3,500–7,000 MB/s and over 500,000 IOPS, eliminating disk input/output bottlenecks for MySQL queries.",
    tags: ["nvme", "pcie 4.0", "sata ssd", "iops", "read write speed"]
  },
  {
    id: "kb-138",
    category: "hardware",
    categoryLabel: "Hardware & Network",
    question: "What is RAID-10 storage configuration and how does it prevent data loss?",
    answer: "RAID-10 combines disk mirroring (RAID 1) with disk striping (RAID 0). Your data is duplicated across mirrored pairs of high-speed NVMe drives. If an individual NVMe drive experiences a hardware failure, the mirror drive immediately takes over with zero downtime and zero data loss while the drive is replaced hot-swap.",
    tags: ["raid 10", "data redundancy", "disk failure", "mirroring", "storage reliability"]
  },
  {
    id: "kb-139",
    category: "hardware",
    categoryLabel: "Hardware & Network",
    question: "What is the HTTP/3 QUIC protocol and how does it benefit mobile visitors?",
    answer: "HTTP/3 runs over UDP using the QUIC protocol rather than traditional TCP. It eliminates head-of-line blocking, accelerates connection establishment (0-RTT), and supports seamless connection migration when mobile visitors switch between Wi-Fi and mobile 4G/5G data networks without reloading pages.",
    tags: ["http/3", "quic", "mobile speed", "protocol", "litespeed http3"]
  },
  {
    id: "kb-140",
    category: "hardware",
    categoryLabel: "Hardware & Network",
    question: "Where are Hostamble datacenters located and how do they ensure low latency in India?",
    answer: "Hostamble operates Tier-III and Tier-IV datacenter nodes with direct presence in Mumbai, India, connected directly to major Indian Internet Exchanges (NIXI, Extreme IX) and multi-homed 10Gbps Tier-1 telecom uplinks. This ensures ultra-low ping latency (<15ms across Indian metros) and localized routing.",
    tags: ["datacenter", "mumbai", "india hosting", "nixi", "latency"]
  },
  {
    id: "kb-141",
    category: "hardware",
    categoryLabel: "Hardware & Network",
    question: "What is Hostamble's 99.9% Uptime SLA Guarantee?",
    answer: "Our 99.9% Uptime Service Level Agreement guarantees that your website infrastructure will remain operational and accessible 99.9% of the time throughout every monthly billing cycle. We maintain redundant power grids, dual UPS battery backups, automated generator failover, and carrier-redundant uplinks.",
    tags: ["uptime sla", "99.9% guarantee", "reliability", "datacenter tier"]
  },
  {
    id: "kb-142",
    category: "hardware",
    categoryLabel: "Hardware & Network",
    question: "How does Hostamble monitor server health and detect hardware failures?",
    answer: "All server nodes are monitored 24/7/365 by automated proactive monitoring systems checking HTTP response codes, ping latency, CPU loads, memory saturation, and drive S.M.A.R.T. metrics every 60 seconds. Our engineering team investigates and resolves anomalies before they cause user-facing downtime.",
    tags: ["monitoring", "server health", "smart metrics", "proactive support"]
  },
  {
    id: "kb-143",
    category: "hardware",
    categoryLabel: "Hardware & Network",
    question: "What is MariaDB and why is it faster than standard MySQL?",
    answer: "MariaDB is an enhanced, drop-in replacement for MySQL created by the original MySQL founders. It includes superior query optimizers (Aria and InnoDB/XtraDB engines), optimized sub-query processing, and advanced thread pooling that handles concurrent queries up to 30% faster than traditional MySQL 8.0.",
    tags: ["mariadb", "mysql", "query optimizer", "database engine"]
  },
  {
    id: "kb-144",
    category: "hardware",
    categoryLabel: "Hardware & Network",
    question: "What are inode limits in cPanel and how do they work?",
    answer: "An inode represents a single file, folder, email message, or script stored in your account. Rather than placing arbitrary restrictions on web traffic, hosting plans specify generous inode limits (e.g., 250,000–500,000+ inodes) to maintain high file system indexing performance across the server.",
    tags: ["inodes", "file limit", "cpanel quotas", "storage"]
  },
  {
    id: "kb-145",
    category: "hardware",
    categoryLabel: "Hardware & Network",
    question: "Can I upgrade my hosting plan seamlessly without changing my server IP address?",
    answer: "Yes. Plan upgrades are instantaneous and automated through your client portal. Upgrades increase your storage quota, CPU allocations, and memory limits immediately in CloudLinux without changing your server IP, requiring nameserver adjustments, or causing website downtime.",
    tags: ["seamless upgrade", "plan upgrade", "ip address", "scaling"]
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CATEGORY 8: BILLING, ACCOUNT & POLICIES (Questions 146 - 156)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "kb-146",
    category: "billing",
    categoryLabel: "Billing & Policies",
    question: "What payment methods are accepted at Hostamble?",
    answer: "We accept all major payment methods: UPI (Google Pay, PhonePe, Paytm, BHIM), Indian Rupee Credit/Debit Cards (Visa, MasterCard, RuPay), NetBanking across 50+ Indian banks, and International Credit/Debit Cards via secure payment gateways.",
    tags: ["payment methods", "upi", "credit card", "debit card", "netbanking", "paytm"]
  },
  {
    id: "kb-147",
    category: "billing",
    categoryLabel: "Billing & Policies",
    question: "How does the 30-Day Money-Back Guarantee work?",
    answer: "If you are not completely satisfied with our hosting speed, performance, or support within 30 days of registration on any annual or multi-year shared or WordPress plan, open a billing ticket to receive a prompt refund. (Domain registrations are non-refundable as registry fees are paid directly to top-level registries).",
    tags: ["money back guarantee", "refund", "30 day policy", "cancellation"]
  },
  {
    id: "kb-148",
    category: "billing",
    categoryLabel: "Billing & Policies",
    question: "Does Hostamble charge renewal price hikes or hidden checkout fees?",
    answer: "No. Hostamble maintains clear, transparent pricing with no hidden checkout surprises. We do not engage in aggressive renewal price multiplication tactics common in the industry; our pricing terms and renewal amounts are clearly displayed upfront.",
    tags: ["renewal pricing", "hidden fees", "transparency", "honest hosting"]
  },
  {
    id: "kb-149",
    category: "billing",
    categoryLabel: "Billing & Policies",
    question: "Which hosting plans include a Free Domain Name registration?",
    answer: "A Free Domain Name (.com, .in, .co.in, or .net) is included with qualifying annual, biennial, and triennial subscriptions on our Essential, Growth, and Prime WordPress plans, as well as qualifying Shared Hosting multi-year plans.",
    tags: ["free domain", "annual plan", "domain offer", "promotions"]
  },
  {
    id: "kb-150",
    category: "billing",
    categoryLabel: "Billing & Policies",
    question: "How do I download official GST tax invoices for business accounting?",
    answer: "Log into your Hostamble client portal, navigate to 'Billing' > 'My Invoices'. Select any paid invoice and click 'Download PDF' or 'Print'. All invoices contain your registered GSTIN, legal business address, and complete HSN/SAC code breakdown for input tax credit claims.",
    tags: ["gst invoice", "tax invoice", "business accounting", "download invoice"]
  },
  {
    id: "kb-151",
    category: "billing",
    categoryLabel: "Billing & Policies",
    question: "How do I add or update my GSTIN number to claim Input Tax Credit (ITC)?",
    answer: "In your client portal, go to Account Details > 'Edit Profile'. Enter your 15-digit GST identification number (GSTIN) and legal registered business name in the tax fields, then click 'Save Changes'. All future and current invoices will automatically populate your GSTIN.",
    tags: ["gstin", "itc", "input tax credit", "business profile"]
  },
  {
    id: "kb-152",
    category: "billing",
    categoryLabel: "Billing & Policies",
    question: "What happens if an invoice payment is overdue?",
    answer: "We send multiple automated payment reminder notifications before and after your invoice due date. Services remain active during a generous grace period. If payment is not received after the grace period, services are temporarily suspended. Accounts are never terminated immediately, and data is safely retained.",
    tags: ["overdue", "grace period", "suspension", "invoice payment"]
  },
  {
    id: "kb-153",
    category: "billing",
    categoryLabel: "Billing & Policies",
    question: "Can I cancel my hosting subscription at any time without penalties?",
    answer: "Yes. You have complete control over your subscription. In your client portal, select your active service, click 'Request Cancellation', choose whether to cancel immediately or at the end of the billing cycle, and confirm. There are no cancellation penalties or lock-in contracts.",
    tags: ["cancellation", "cancel service", "no penalties", "client portal"]
  },
  {
    id: "kb-154",
    category: "billing",
    categoryLabel: "Billing & Policies",
    question: "How do I switch billing currency between INR (₹) and USD ($)?",
    answer: "You can toggle the global currency switcher located in the website header or footer between INR (₹) and USD ($). Prices across all hosting tiers, domain registration lists, and shopping carts will update instantly in real time.",
    tags: ["currency switcher", "inr", "usd", "billing currency"]
  },
  {
    id: "kb-155",
    category: "billing",
    categoryLabel: "Billing & Policies",
    question: "How fast is Hostamble WhatsApp Live Support response time?",
    answer: "Our WhatsApp live support is staffed by real technical engineers with typical first-response times under 3 to 5 minutes during operational hours. You can message us directly for quick guidance on nameservers, billing assistance, or status checks.",
    tags: ["whatsapp support", "response time", "live chat", "fast support"]
  },
  {
    id: "kb-156",
    category: "billing",
    categoryLabel: "Billing & Policies",
    question: "How do I open a technical support ticket in the Hostamble client portal?",
    answer: "Log into your Hostamble client portal, click 'Support' > 'Tickets' > 'Open Ticket'. Select the appropriate department (Technical Support, Billing, or Migrations), choose your related hosting service, describe your issue or paste relevant error logs, and click 'Submit'. Average ticket response time is under 15 minutes.",
    tags: ["support ticket", "help desk", "client portal", "technical assistance"]
  }
];
