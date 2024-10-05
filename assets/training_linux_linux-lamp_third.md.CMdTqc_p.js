import{_ as a,o as s,c as p,a7 as n}from"./chunks/framework.D6IbrqK8.js";const b=JSON.parse('{"title":"第三步 编译安装PHP","description":"","frontmatter":{"tags":["Linux","架构","运维","LAMP"],"hidden":true,"category":"Linux 运维"},"headers":[],"relativePath":"training/linux/linux-lamp/third.md","filePath":"training/linux/linux-lamp/third.md","lastUpdated":1728132256000}'),l={name:"training/linux/linux-lamp/third.md"},e=n(`<h1 id="第三步-编译安装php" tabindex="-1">第三步 编译安装PHP <a class="header-anchor" href="#第三步-编译安装php" aria-label="Permalink to &quot;第三步 编译安装PHP&quot;">​</a></h1><h2 id="_1、安装前准备" tabindex="-1">1、安装前准备 <a class="header-anchor" href="#_1、安装前准备" aria-label="Permalink to &quot;1、安装前准备&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#编译安装libmcrypt</span></span>
<span class="line"><span>[root@localhost app]# tar -xvf /app/packages/libmcrypt-2.5.8.tar.xz -C /app/</span></span>
<span class="line"><span>[root@localhost libmcrypt-2.5.8]# ./configure --prefix=/usr/local/libmcrypt</span></span>
<span class="line"><span>[root@localhost libmcrypt-2.5.8]# make &amp;&amp; make install</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#编译安装mhash</span></span>
<span class="line"><span>[root@localhost libmcrypt-2.5.8]# tar -xvf /app/packages/mhash-0.9.9.9.tar.xz -C /app/</span></span>
<span class="line"><span>[root@localhost mhash-0.9.9.9]# ./configure --prefix=/usr/local/mhash</span></span>
<span class="line"><span>[root@localhost mhash-0.9.9.9]# make &amp;&amp; make install</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#编译安装mcrypt</span></span>
<span class="line"><span>[root@localhost libmcrypt-2.5.8]# tar -xvf /app/packages/mcrypt-2.6.8.tar.xz -C /app/</span></span>
<span class="line"><span>[root@localhost mcrypt-2.6.8]# export LD_LIBRARY_PATH=/usr/local/libmcrypt/lib:/usr/local/mhash/lib </span></span>
<span class="line"><span>[root@localhost mcrypt-2.6.8]# export LDFLAGS=&quot;-L/usr/local/mhash/lib -I/usr/local/mhash/include/&quot; </span></span>
<span class="line"><span>[root@localhost mcrypt-2.6.8]# export CFLAGS=&quot;-I/usr/local/mhash/include/&quot; </span></span>
<span class="line"><span>[root@localhost mcrypt-2.6.8]# ./configure --prefix=/usr/local/mcrypt --with-libmcrypt-prefix=/usr/local/libmcrypt</span></span>
<span class="line"><span>[root@localhost mcrypt-2.6.8]# make &amp;&amp; make install</span></span>
<span class="line"><span>#编译安装oniguruma</span></span>
<span class="line"><span>[root@localhost packages]wget https://github.com/kkos/oniguruma/archive/v6.9.4.tar.gz -O oniguruma-6.9.4.tar.gz </span></span>
<span class="line"><span>[root@localhost ~]# tar -xvf /app/packages/oniguruma-6.9.4.tar.gz -C /app/</span></span>
<span class="line"><span>[root@localhost oniguruma-6.9.4]# pwd</span></span>
<span class="line"><span>/app/oniguruma-6.9.4</span></span>
<span class="line"><span>[root@localhost oniguruma-6.9.4]# ./autogen.sh &amp;&amp; ./configure --prefix=/usr #这里安装路径只能指定/usr</span></span>
<span class="line"><span>[root@localhost oniguruma-6.9.4]# make &amp;&amp; make install</span></span>
<span class="line"><span>[root@localhost app]# dnf -y install libxml2-devel krb5-devel openssl-devel sqlite-devel libcurl-devel libxslt-devel  libjpeg-devel libzip-devel bzip2-devel libpng-devel  freetype-devel</span></span></code></pre></div><h2 id="_2、php编译选项参考" tabindex="-1">2、php编译选项参考 <a class="header-anchor" href="#_2、php编译选项参考" aria-label="Permalink to &quot;2、php编译选项参考&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>./configure --prefix=/usr/local/php --with-apxs2=/usr/local/apache/bin/apxs  --with-config-file-path=/usr/local/php/etc  --with-mysql --with-mysqli  --with-pdo-mysql --with-mysql-sock=/var/lib/mysql/mysql.sock  --enable-mbstring --enable-session --enable-fpm --enable-opcache --enable-fastcgi --with-fpm-user=daemon  --with-curl  --with-openssl --with-zlib --with-fpm-group=daemon  --enable-gd  --with-libmcrypt=/usr/local/libmcrypt --with-mcrypt=/usr/local/mcrypt  --with-freetype --with-jpeg --with-gettext  --enable-sockets --enable-xml --with-zip --with-libdir=lib64  --with-libxml --with-openssl --with-pear   -with-bz2  --with-session</span></span></code></pre></div><h2 id="_3、解压包" tabindex="-1">3、解压包 <a class="header-anchor" href="#_3、解压包" aria-label="Permalink to &quot;3、解压包&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost app]# tar -xvf /app/packages/php-7.4.11.tar.xz -C /app/</span></span></code></pre></div><h2 id="_4、编译安装" tabindex="-1">4、编译安装 <a class="header-anchor" href="#_4、编译安装" aria-label="Permalink to &quot;4、编译安装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost php-7.4.11]# ./configure --prefix=/usr/local/php --with-apxs2=/usr/local/apache/bin/apxs  --with-config-file-path=/usr/local/php/etc  --with-mysql --with-mysqli  --with-pdo-mysql --with-mysql-sock=/var/lib/mysql/mysql.sock  --enable-mbstring --enable-session --enable-fpm --enable-opcache --enable-fastcgi --with-fpm-user=daemon  --with-curl  --with-openssl --with-zlib --with-fpm-group=daemon  --enable-gd  --with-libmcrypt=/usr/local/libmcrypt --with-mcrypt=/usr/local/mcrypt  --with-freetype --with-jpeg --with-gettext  --enable-sockets --enable-xml --with-zip --with-libdir=lib64  --with-libxml --with-openssl --with-pear   -with-bz2  --with-session</span></span>
<span class="line"><span>[root@localhost php-7.4.11]# make &amp;&amp; make install</span></span></code></pre></div><h2 id="_5、创建配置文件" tabindex="-1">5、创建配置文件 <a class="header-anchor" href="#_5、创建配置文件" aria-label="Permalink to &quot;5、创建配置文件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost php-7.4.11]# pwd</span></span>
<span class="line"><span>/app/php-7.4.11</span></span>
<span class="line"><span>[root@localhost php-7.4.11]# cp -rf php.ini-production /usr/local/php/etc/php.ini</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@localhost php-fpm.d]# pwd</span></span>
<span class="line"><span>/usr/local/php/etc/php-fpm.d</span></span>
<span class="line"><span>[root@localhost php-fpm.d]# cp -rf www.conf.default www.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@localhost etc]# pwd</span></span>
<span class="line"><span>/usr/local/php/etc</span></span>
<span class="line"><span>[root@localhost etc]# cp -rf php-fpm.conf.default php-fpm.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@localhost php]# pwd</span></span>
<span class="line"><span>/usr/local/php</span></span>
<span class="line"><span>[root@localhost php]# mkdir daemon</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@localhost php-7.4.11]# pwd</span></span>
<span class="line"><span>/app/php-7.4.11     </span></span>
<span class="line"><span>[root@localhost php-7.4.11]# cp -rf sapi/fpm/init.d.php-fpm /usr/local/php/daemon/php-fpm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@localhost php]# cd daemon/</span></span>
<span class="line"><span>[root@localhost daemon]# pwd</span></span>
<span class="line"><span>/usr/local/php/daemon</span></span>
<span class="line"><span>[root@localhost daemon]# chmod 777 -R php-fpm</span></span></code></pre></div><h2 id="_6、测试启动php-fpm" tabindex="-1">6、测试启动php-fpm <a class="header-anchor" href="#_6、测试启动php-fpm" aria-label="Permalink to &quot;6、测试启动php-fpm&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost daemon]# ./php-fpm start</span></span>
<span class="line"><span>Starting php-fpm  done</span></span>
<span class="line"><span>[root@localhost daemon]# ps auxfww | grep php | grep -v grep</span></span>
<span class="line"><span>root      132055  0.0  0.1 123664 10848 ?        Ss   16:53   0:00 php-fpm: master process (/usr/local/php/etc/php-fpm.conf)</span></span>
<span class="line"><span>daemon    132056  0.0  0.1 149940 10048 ?        S    16:53   0:00  \\_ php-fpm: pool www</span></span>
<span class="line"><span>daemon    132057  0.0  0.1 149940 10048 ?        S    16:53   0:00  \\_ php-fpm: pool www</span></span></code></pre></div><h2 id="_7、配置php支持apache" tabindex="-1">7、配置php支持apache <a class="header-anchor" href="#_7、配置php支持apache" aria-label="Permalink to &quot;7、配置php支持apache&quot;">​</a></h2><h3 id="_7-1-编辑apache配置文件" tabindex="-1">7.1 编辑Apache配置文件 <a class="header-anchor" href="#_7-1-编辑apache配置文件" aria-label="Permalink to &quot;7.1 编辑Apache配置文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost ~]# vim /usr/local/apache/conf/httpd.conf</span></span>
<span class="line"><span>#找到AddType 添加：</span></span>
<span class="line"><span>    AddType application/x-httpd-php .php</span></span>
<span class="line"><span>    AddType application/x-httpd-php-source .phps </span></span>
<span class="line"><span>#找到</span></span>
<span class="line"><span>&lt;IfModule dir_module&gt;</span></span>
<span class="line"><span>    DirectoryIndex index.html</span></span>
<span class="line"><span>&lt;/IfModule&gt;</span></span>
<span class="line"><span>#改为</span></span>
<span class="line"><span>&lt;IfModule dir_module&gt;</span></span>
<span class="line"><span>    DirectoryIndex index.html index.php</span></span>
<span class="line"><span>&lt;/IfModule&gt;</span></span></code></pre></div><h3 id="_7-2-编辑php-ini" tabindex="-1">7.2 编辑php.ini <a class="header-anchor" href="#_7-2-编辑php-ini" aria-label="Permalink to &quot;7.2 编辑php.ini&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost ~]# vim /usr/local/php/etc/pht.ini</span></span>
<span class="line"><span>#找到display_startup_errors 和 log_errors</span></span>
<span class="line"><span>#改为：</span></span>
<span class="line"><span>log_errors = On</span></span>
<span class="line"><span>display_startup_errors = On</span></span></code></pre></div><h3 id="_7-3-重启php-apache" tabindex="-1">7.3 重启php apache <a class="header-anchor" href="#_7-3-重启php-apache" aria-label="Permalink to &quot;7.3 重启php apache&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost ~]# /usr/local/php/daemon/php-fpm restart</span></span>
<span class="line"><span>Gracefully shutting down php-fpm . done</span></span>
<span class="line"><span>Starting php-fpm  done</span></span>
<span class="line"><span>[root@localhost ~]# /usr/local/apache/bin/apachectl -k restart</span></span></code></pre></div><h3 id="_7-4-验证" tabindex="-1">7.4 验证 <a class="header-anchor" href="#_7-4-验证" aria-label="Permalink to &quot;7.4 验证&quot;">​</a></h3><p>将一个php页面放到/usr/local/apache/htdocs</p><p>浏览器访问虚拟机ip</p><p>注：构建服务所需的包可在<a href="https://download.csdn.net/download/qq_45417634/13208956" target="_blank" rel="noreferrer">server_source_2020.iso </a>请自行下载，您也可以在所需安装包官网下载 本地源配置、防火墙、selinux等是linux较为基础的内容，不再赘述。 本文均为原创，如需与博主交流可email至mufeng.yu@qq.com</p>`,24),t=[e];function i(o,c,h,r,d,m){return s(),p("div",{"data-pagefind-body":!0},t)}const g=a(l,[["render",i]]);export{b as __pageData,g as default};
