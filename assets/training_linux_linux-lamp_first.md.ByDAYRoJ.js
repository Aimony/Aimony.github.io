import{_ as a,o as s,c as n,a7 as p}from"./chunks/framework.D6IbrqK8.js";const f=JSON.parse('{"title":"第一步 编译安装httpd服务器","description":"","frontmatter":{"tags":["Linux","架构","运维","LAMP"],"hidden":true,"category":"Linux 运维"},"headers":[],"relativePath":"training/linux/linux-lamp/first.md","filePath":"training/linux/linux-lamp/first.md","lastUpdated":1728132256000}'),e={name:"training/linux/linux-lamp/first.md"},t=p(`<h1 id="第一步-编译安装httpd服务器" tabindex="-1">第一步 编译安装httpd服务器 <a class="header-anchor" href="#第一步-编译安装httpd服务器" aria-label="Permalink to &quot;第一步 编译安装httpd服务器&quot;">​</a></h1><h2 id="_1、安装前准备" tabindex="-1">1、安装前准备 <a class="header-anchor" href="#_1、安装前准备" aria-label="Permalink to &quot;1、安装前准备&quot;">​</a></h2><p>解压apr apr-util pcre httpd expat包</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost app]# tar -xvf apr-1.6.5.tar.xz -C /app/</span></span>
<span class="line"><span>[root@localhost app]# tar -xvf apr-util-1.6.1.tar.xz -C /app/</span></span>
<span class="line"><span>[root@localhost app]# tar -xvf pcre-8.42.tar.xz -C /app/</span></span>
<span class="line"><span>[root@localhost app]# tar -xvf httpd-2.4.46.tar.xz -C /app/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@localhost app]# ls</span></span>
<span class="line"><span>apr-1.6.5  apr-util-1.6.1  httpd-2.4.46  packages  pcre-8.42</span></span></code></pre></div><p>安装软件支持</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost apr-1.6.5]# dnf -y install gcc gcc-c++ make cmake gdb libstdc++*</span></span></code></pre></div><h2 id="_2、编译安装apr" tabindex="-1">2、编译安装apr <a class="header-anchor" href="#_2、编译安装apr" aria-label="Permalink to &quot;2、编译安装apr&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost apr-1.6.5]# pwd</span></span>
<span class="line"><span>/app/apr-1.6.5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@localhost apr-1.6.5]# ./configure --prefix=/usr/local/apr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@localhost apr-1.6.5]# make &amp;&amp; make install</span></span></code></pre></div><p>这里运行编译文件时可能会报错</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rm: cannot remove &#39;libtoolT&#39;: No such file or directory</span></span></code></pre></div><p>解决：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost apr-1.6.5]# vim configure</span></span>
<span class="line"><span>#把RM=&#39;$RM&#39;改为RM=&#39;$RM  -f&#39;</span></span></code></pre></div><h2 id="_3、编译安装expat" tabindex="-1">3、编译安装expat <a class="header-anchor" href="#_3、编译安装expat" aria-label="Permalink to &quot;3、编译安装expat&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost expat-2.2.3]# pwd</span></span>
<span class="line"><span>/app/expat-2.2.3</span></span>
<span class="line"><span>[root@localhost expat-2.2.3]# ./configure --prefix=/usr/local/expat</span></span>
<span class="line"><span>make &amp;&amp; make install</span></span></code></pre></div><h2 id="_4、编译安装apr-util" tabindex="-1">4、编译安装apr-util <a class="header-anchor" href="#_4、编译安装apr-util" aria-label="Permalink to &quot;4、编译安装apr-util&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost apr-util-1.6.1]# pwd</span></span>
<span class="line"><span>/app/apr-util-1.6.1</span></span>
<span class="line"><span>[root@localhost apr-util-1.6.1]# ./configure --prefix=/usr/local/apr-util --with-apr=/usr/local/apr --with-expat=/usr/local/expat</span></span>
<span class="line"><span>make &amp;&amp; make install</span></span></code></pre></div><h2 id="_5、编译安装pcre" tabindex="-1">5、编译安装pcre <a class="header-anchor" href="#_5、编译安装pcre" aria-label="Permalink to &quot;5、编译安装pcre&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost pcre-8.42]# pwd</span></span>
<span class="line"><span>/app/pcre-8.42</span></span>
<span class="line"><span>[root@localhost pcre-8.42]# ./configure --prefix=/usr/local/pcre</span></span>
<span class="line"><span>[root@localhost pcre-8.42]# make &amp;&amp; make install</span></span></code></pre></div><h2 id="_6、编译安装httpd" tabindex="-1">6、编译安装httpd <a class="header-anchor" href="#_6、编译安装httpd" aria-label="Permalink to &quot;6、编译安装httpd&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost httpd-2.4.46]# pwd</span></span>
<span class="line"><span>/app/httpd-2.4.46</span></span>
<span class="line"><span>[root@localhost httpd-2.4.46]# ./configure --prefix=/usr/local/apache --with-apr=/usr/local/apr --with-apr-util=/usr/local/apr-util --with-pcre=/usr/local/pcre  --enable-so   --enable-rewrite --enable-ssl  --with-ssl=/usr/lib  --enable-auth-digest --enable-cgi --enable-suexec  --with-suexec-caller=daemon --with-suexec-docroot=/usr/local/apache/htdocs</span></span>
<span class="line"><span>#这里的编译选项应当是需要什么加什么，具体选项见说明文档</span></span></code></pre></div><blockquote><p>httpd服务的目录结构</p><p>服务目录：/usr/local/apache/</p><p>主配置文件：/usr/local/apache/conf/httpd.conf</p><p>网页目录：/usr/local/apache/htdocs/</p><p>服务脚本：/usr/local/apache/bin/apachectl</p><p>执行程序：/usr/local/apache/bin/httpd</p><p>访问日志： /usr/local/apache/log/access_log</p><p>错误日志： /usr/local/apache/log/error_log</p></blockquote><h2 id="_7、selinux配置" tabindex="-1">7、selinux配置 <a class="header-anchor" href="#_7、selinux配置" aria-label="Permalink to &quot;7、selinux配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost httpd-2.4.46]# getsebool -a | grep httpd</span></span>
<span class="line"><span>httpd_anon_write --&gt; off</span></span>
<span class="line"><span>httpd_builtin_scripting --&gt; on</span></span>
<span class="line"><span>httpd_can_check_spam --&gt; off</span></span>
<span class="line"><span>httpd_can_connect_ftp --&gt; off</span></span>
<span class="line"><span>httpd_can_connect_ldap --&gt; off</span></span>
<span class="line"><span>httpd_can_connect_mythtv --&gt; off</span></span>
<span class="line"><span>httpd_can_connect_zabbix --&gt; off</span></span>
<span class="line"><span>httpd_can_network_connect --&gt; off</span></span>
<span class="line"><span>httpd_can_network_connect_cobbler --&gt; off</span></span>
<span class="line"><span>httpd_can_network_connect_db --&gt; off</span></span>
<span class="line"><span>httpd_can_network_memcache --&gt; off</span></span>
<span class="line"><span>httpd_can_network_relay --&gt; off</span></span>
<span class="line"><span>httpd_can_sendmail --&gt; off</span></span>
<span class="line"><span>httpd_dbus_avahi --&gt; off</span></span>
<span class="line"><span>httpd_dbus_sssd --&gt; off</span></span>
<span class="line"><span>httpd_dontaudit_search_dirs --&gt; off</span></span>
<span class="line"><span>httpd_enable_cgi --&gt; on</span></span>
<span class="line"><span>httpd_enable_ftp_server --&gt; off</span></span>
<span class="line"><span>httpd_enable_homedirs --&gt; off</span></span>
<span class="line"><span>httpd_execmem --&gt; off</span></span>
<span class="line"><span>httpd_graceful_shutdown --&gt; off</span></span>
<span class="line"><span>httpd_manage_ipa --&gt; off</span></span>
<span class="line"><span>httpd_mod_auth_ntlm_winbind --&gt; off</span></span>
<span class="line"><span>httpd_mod_auth_pam --&gt; off</span></span>
<span class="line"><span>httpd_read_user_content --&gt; off</span></span>
<span class="line"><span>httpd_run_ipa --&gt; off</span></span>
<span class="line"><span>httpd_run_preupgrade --&gt; off</span></span>
<span class="line"><span>httpd_run_stickshift --&gt; off</span></span>
<span class="line"><span>httpd_serve_cobbler_files --&gt; off</span></span>
<span class="line"><span>httpd_setrlimit --&gt; off</span></span>
<span class="line"><span>httpd_ssi_exec --&gt; off</span></span>
<span class="line"><span>httpd_sys_script_anon_write --&gt; off</span></span>
<span class="line"><span>httpd_tmp_exec --&gt; off</span></span>
<span class="line"><span>httpd_tty_comm --&gt; off</span></span>
<span class="line"><span>httpd_unified --&gt; off</span></span>
<span class="line"><span>httpd_use_cifs --&gt; off</span></span>
<span class="line"><span>httpd_use_fusefs --&gt; off</span></span>
<span class="line"><span>httpd_use_gpg --&gt; off</span></span>
<span class="line"><span>httpd_use_nfs --&gt; off</span></span>
<span class="line"><span>httpd_use_opencryptoki --&gt; off</span></span>
<span class="line"><span>httpd_use_openstack --&gt; off</span></span>
<span class="line"><span>httpd_use_sasl --&gt; off</span></span>
<span class="line"><span>httpd_verify_dns --&gt; off</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@localhost httpd-2.4.46]# setsebool -P httpd_anon_write on</span></span>
<span class="line"><span>[root@localhost httpd-2.4.46]# setsebool -P httpd_can_check_spam on</span></span>
<span class="line"><span>[root@localhost httpd-2.4.46]# setsebool -P httpd_can_network_connect on</span></span>
<span class="line"><span>[root@localhost httpd-2.4.46]# setsebool -P httpd_can_network_connect_db on</span></span>
<span class="line"><span>[root@localhost httpd-2.4.46]# setsebool -P httpd_can_network_relay on</span></span>
<span class="line"><span>[root@localhost httpd-2.4.46]# setsebool -P httpd_tmp_exec on</span></span>
<span class="line"><span>[root@localhost httpd-2.4.46]# setsebool -P httpd_ssi_exec  on</span></span>
<span class="line"><span>[root@localhost httpd-2.4.46]# setsebool -P httpd_enable_cgi  on</span></span></code></pre></div><h2 id="_8、防火墙配置" tabindex="-1">8、防火墙配置 <a class="header-anchor" href="#_8、防火墙配置" aria-label="Permalink to &quot;8、防火墙配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost httpd-2.4.46]# firewall-cmd  --add-port=80/tcp --permanent </span></span>
<span class="line"><span>success</span></span>
<span class="line"><span>[root@localhost httpd-2.4.46]# firewall-cmd  --add-port=443/tcp --permanent </span></span>
<span class="line"><span>success</span></span>
<span class="line"><span>[root@localhost httpd-2.4.46]# firewall-cmd  --add-port=8080/tcp --permanent </span></span>
<span class="line"><span>success</span></span>
<span class="line"><span>[root@localhost httpd-2.4.46]# firewall-cmd  --add-port=8888/tcp --permanent </span></span>
<span class="line"><span>success</span></span>
<span class="line"><span>[root@localhost httpd-2.4.46]# firewall-cmd  --add-service=http  --permanent </span></span>
<span class="line"><span>success</span></span>
<span class="line"><span>[root@localhost httpd-2.4.46]# firewall-cmd  --add-service=https  --permanent </span></span>
<span class="line"><span>success</span></span>
<span class="line"><span>[root@localhost httpd-2.4.46]# firewall-cmd  --reload</span></span>
<span class="line"><span>success</span></span></code></pre></div><h2 id="_9、修改主配置文件httpd-conf" tabindex="-1">9、修改主配置文件httpd.conf <a class="header-anchor" href="#_9、修改主配置文件httpd-conf" aria-label="Permalink to &quot;9、修改主配置文件httpd.conf&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost conf]# pwd</span></span>
<span class="line"><span>/usr/local/apache/conf</span></span>
<span class="line"><span>[root@localhost conf]# vim httpd.conf </span></span>
<span class="line"><span></span></span>
<span class="line"><span>ServerAdmin mufeng.yu@qq.com		#管理员邮箱</span></span>
<span class="line"><span>ServerName www.mufeng.com:80	#站点名称</span></span></code></pre></div><blockquote><p>ServerRoot：服务目录</p><p>ServerAdmin：管理员邮箱</p><p>User：运行服务的用户身份</p><p>Group：运行服务的组身份</p><p>ServerName：网站服务器的域名</p><p>DocumentRoot：网页文档的根目录</p><p>Listen：监听的IP地址、端口号</p><p>PidFile：保存httpd进程PID号的文件</p><p>DirectoryIndex：默认的索引页文件</p><p>ErrorLog：错误日志文件的位置</p><p>CustomLog：访问日志文件的位置</p><p>LogLevel：记录日志的级别，默认为warn</p><p>Timeout：网络连接超时，默认为300秒</p><p>KeepAlive：是否保持连接，可选On或Off</p><p>MaxKeepAliveRequests：每次连接最多请求文件数</p><p>KeepAliveTimeout：保持连接状态时的超时时间</p><p>Include：需要包含进来的其他配置文件</p></blockquote><h2 id="_10、http-conf-语法检查" tabindex="-1">10、http.conf 语法检查 <a class="header-anchor" href="#_10、http-conf-语法检查" aria-label="Permalink to &quot;10、http.conf 语法检查&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost conf]# /usr/local/apache/bin/apachectl  -t</span></span>
<span class="line"><span>Syntax OK</span></span></code></pre></div><h2 id="_11、启动httpd服务" tabindex="-1">11、启动httpd服务 <a class="header-anchor" href="#_11、启动httpd服务" aria-label="Permalink to &quot;11、启动httpd服务&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost conf]# /usr/local/apache/bin/apachectl start</span></span></code></pre></div><h2 id="_12、测试" tabindex="-1">12、测试 <a class="header-anchor" href="#_12、测试" aria-label="Permalink to &quot;12、测试&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost conf]# wget www.mufeng.com</span></span>
<span class="line"><span>--2020-12-01 08:41:48--  http://www.mufeng.com/</span></span>
<span class="line"><span>Resolving www.mufeng.com (www.mufeng.com)... 192.35.35.1</span></span>
<span class="line"><span>Connecting to www.mufeng.com (www.mufeng.com)|192.35.35.1|:80... connected.</span></span>
<span class="line"><span>HTTP request sent, awaiting response... 200 OK</span></span>
<span class="line"><span>Length: 45 [text/html]</span></span>
<span class="line"><span>Saving to: ‘index.html’</span></span>
<span class="line"><span></span></span>
<span class="line"><span>index.html                        100%[==========================================================&gt;]      45  --.-KB/s    in 0s      </span></span>
<span class="line"><span></span></span>
<span class="line"><span>2020-12-01 08:41:48 (7.99 MB/s) - ‘index.html’ saved [45/45]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@localhost conf]# vim index.html </span></span>
<span class="line"><span>&lt;html&gt;&lt;body&gt;&lt;h1&gt;It works!&lt;/h1&gt;&lt;/body&gt;&lt;/html&gt;</span></span></code></pre></div><blockquote><p>这个测试完全可以通过ip地址来实现，如果想通过域名访问，需要配置自己的DNS域名服务器bind</p></blockquote><h2 id="_13、测试本机httpd服务器的性能" tabindex="-1">13、测试本机httpd服务器的性能 <a class="header-anchor" href="#_13、测试本机httpd服务器的性能" aria-label="Permalink to &quot;13、测试本机httpd服务器的性能&quot;">​</a></h2><p>ab命令格式说明</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ab [-q] -c 并发请求数 -n 总的请求数 [http://]域名[:端口]/路径</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@localhost conf]# ulimit -n 3600</span></span>
<span class="line"><span>[root@localhost bin]# pwd</span></span>
<span class="line"><span>/usr/local/apache/bin</span></span>
<span class="line"><span>[root@localhost bin]# ./ab -q -c 2000 -n 4000 http://www.mufeng.com/ </span></span>
<span class="line"><span>This is ApacheBench, Version 2.3 &lt;$Revision: 1879490 $&gt;</span></span>
<span class="line"><span>Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/</span></span>
<span class="line"><span>Licensed to The Apache Software Foundation, http://www.apache.org/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Benchmarking www.mufeng.com (be patient).....done</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Server Software:        Apache/2.4.46</span></span>
<span class="line"><span>Server Hostname:        www.mufeng.com</span></span>
<span class="line"><span>Server Port:            80</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Document Path:          /</span></span>
<span class="line"><span>Document Length:        45 bytes</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Concurrency Level:      2000</span></span>
<span class="line"><span>Time taken for tests:   0.519 seconds</span></span>
<span class="line"><span>Complete requests:      4000</span></span>
<span class="line"><span>Failed requests:        0</span></span>
<span class="line"><span>Total transferred:      1156000 bytes</span></span>
<span class="line"><span>HTML transferred:       180000 bytes</span></span>
<span class="line"><span>Requests per second:    7703.79 [#/sec] (mean)</span></span>
<span class="line"><span>Time per request:       259.613 [ms] (mean)</span></span>
<span class="line"><span>Time per request:       0.130 [ms] (mean, across all concurrent requests)</span></span>
<span class="line"><span>Transfer rate:          2174.21 [Kbytes/sec] received</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Connection Times (ms)</span></span>
<span class="line"><span>              min  mean[+/-sd] median   max</span></span>
<span class="line"><span>Connect:        0    9  17.2      4      71</span></span>
<span class="line"><span>Processing:     0   17  46.8      8     428</span></span>
<span class="line"><span>Waiting:        0   16  46.7      7     428</span></span>
<span class="line"><span>Total:          0   26  58.4     12     498</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Percentage of the requests served within a certain time (ms)</span></span>
<span class="line"><span>  50%     12</span></span>
<span class="line"><span>  66%     13</span></span>
<span class="line"><span>  75%     15</span></span>
<span class="line"><span>  80%     16</span></span>
<span class="line"><span>  90%     24</span></span>
<span class="line"><span>  95%     81</span></span>
<span class="line"><span>  98%    283</span></span>
<span class="line"><span>  99%    288</span></span>
<span class="line"><span> 100%    498 (longest request)</span></span></code></pre></div><p>注：构建服务所需的包可在<a href="https://download.csdn.net/download/qq_45417634/13208956" target="_blank" rel="noreferrer">server_source_2020.iso </a>请自行下载，您也可以在所需安装包官网下载 本地源配置、防火墙、selinux等是linux较为基础的内容，不再赘述。 本文均为原创，如需与博主交流可email至mufeng.yu@qq.com</p>`,40),l=[t];function o(c,i,r,h,d,u){return s(),n("div",{"data-pagefind-body":!0},l)}const _=a(e,[["render",o]]);export{f as __pageData,_ as default};
