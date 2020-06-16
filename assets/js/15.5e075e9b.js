(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{345:function(s,n,a){"use strict";a.r(n);var t=a(8),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"centos-dokuwiki-安装指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-dokuwiki-安装指南"}},[s._v("#")]),s._v(" CentOS dokuwiki 安装指南")]),s._v(" "),a("blockquote",[a("p",[s._v("dokuwiki 运行需要依赖于 php 环境, 由于 CentOS 7 环境较老, 所以需要编译安装.")])]),s._v(" "),a("h2",{attrs:{id:"_1-php-安装配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-php-安装配置"}},[s._v("#")]),s._v(" 1. PHP 安装配置")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载最新stable PHP")]),s._v("\nhttps://www.php.net/downloads.php"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#v7.4.1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压, 安装依赖")]),s._v("\nhttps://blog.csdn.net/gao449812984/article/details/80843118\n\n./confgure\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# php-fpm 修改")]),s._v("\n/usr/local/etc/php-fpm.conf\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("include")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/etc/php-fpm.d/*.conf\n\n/usr/local/etc/php-fpm.d/www.conf\n    user "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" www\n    group "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" www\n    listen "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:9000\n    listen.owner "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" www\n    listen.group "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" www\n    listen.mode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 0660\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 php-fpm, 可以看到监听9000端口")]),s._v("\n/usr/local/sbin/php-fpm -c etc/php.ini -y /usr/local/etc/php-fpm.conf\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h2",{attrs:{id:"dokuwiki-安装配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dokuwiki-安装配置"}},[s._v("#")]),s._v(" dokuwiki 安装配置")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载后解压")]),s._v("\n/opt/openresty/nginx/html/liteman/wiki\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" www:www wiki -R\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# conf 配置参考\nserver {\n    listen 1080;\n    #server_name liteman.xyz;\n    server_name 127.0.0.1;\n\n    # Maximum file upload size is 4MB - change accordingly if needed\n    client_max_body_size 4M;\n    client_body_buffer_size 128k;\n\n    root /opt/openresty/nginx/html/liteman/wiki;\n    index doku.php;\n\n    #Remember to comment the below out when you\'re installing, and uncomment it when done.\n    #    location ~ /(conf/|bin/|inc/|install.php) { deny all; }\n\n    #Support for X-Accel-Redirect\n    location ~ ^/data/ { internal ; }\n\n    location ~ ^/lib.*\\.(js|css|gif|png|ico|jpg|jpeg)$ {\n        expires 365d;\n    }\n\n    location / { try_files $uri $uri/ @wiki; }\n    #location / { try_files $uri $uri/ =404; }\n\n    location @wiki {\n        # rewrites "doku.php/" out of the URLs if you set the userwrite setting to .htaccess in dokuwiki config page\n        rewrite ^/_media/(.*) /lib/exe/fetch.php?media=$1 last;\n        rewrite ^/_detail/(.*) /lib/exe/detail.php?media=$1 last;\n        rewrite ^/_export/([^/]+)/(.*) /doku.php?do=export_$1&id=$2 last;\n        rewrite ^/(.*) /doku.php?id=$1&$args last;\n    }\n\n    location ~ \\.php$ {\n        try_files $uri $uri/ /doku.php;\n        include fastcgi_params;\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param REDIRECT_STATUS 200;\n        fastcgi_pass 127.0.0.1:9000;\n        # fastcgi_pass unix:/var/run/php5-fpm.sock; #old php version\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);