(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{360:function(t,s,a){"use strict";a.r(s);var e=a(8),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"epoll-详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#epoll-详解"}},[t._v("#")]),t._v(" epoll 详解")]),t._v(" "),a("blockquote",[a("p",{staticStyle:{"font-family":"Arial","font-size":"80%",color:"#C0C0C0"},attrs:{align:"left"}},[t._v("全文字数 "+t._s(t.$page.readingTime.words)+" words  |  阅读时间 "+t._s(Math.ceil(t.$page.readingTime.minutes))+" mins")]),t._v("\n综合网络上关于 epoll 相关文章, 梳理 epoll 本质\n")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#数据的接收"}},[t._v("数据的接收")]),a("ul",[a("li",[a("a",{attrs:{href:"#网卡接收数据"}},[t._v("网卡接收数据")])]),a("li",[a("a",{attrs:{href:"#中断信号通知-cpu"}},[t._v("中断信号通知 CPU")])]),a("li",[a("a",{attrs:{href:"#操作系统进程调度处理数据"}},[t._v("操作系统进程调度处理数据")])])])]),a("li",[a("a",{attrs:{href:"#同时监听多个-socket-的简单方法"}},[t._v("同时监听多个 Socket 的简单方法")]),a("ul",[a("li",[a("a",{attrs:{href:"#select"}},[t._v("select()")])])])]),a("li",[a("a",{attrs:{href:"#epoll-设计思路"}},[t._v("epoll 设计思路")]),a("ul",[a("li",[a("a",{attrs:{href:"#功能分离"}},[t._v("功能分离")])]),a("li",[a("a",{attrs:{href:"#就绪列表"}},[t._v("就绪列表")])])])]),a("li",[a("a",{attrs:{href:"#epoll-原理和流程"}},[t._v("epoll 原理和流程")]),a("ul",[a("li",[a("a",{attrs:{href:"#创建-epoll-对象"}},[t._v("创建 epoll 对象")])]),a("li",[a("a",{attrs:{href:"#维护监视列表"}},[t._v("维护监视列表")])]),a("li",[a("a",{attrs:{href:"#接收数据"}},[t._v("接收数据")])]),a("li",[a("a",{attrs:{href:"#阻塞和唤醒进程"}},[t._v("阻塞和唤醒进程")])])])]),a("li",[a("a",{attrs:{href:"#epoll-实现细节"}},[t._v("epoll 实现细节")])]),a("li",[a("a",{attrs:{href:"#参考资料"}},[t._v("参考资料")])])])]),a("p"),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"数据的接收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据的接收"}},[t._v("#")]),t._v(" 数据的接收")]),t._v(" "),a("h3",{attrs:{id:"网卡接收数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网卡接收数据"}},[t._v("#")]),t._v(" 网卡接收数据")]),t._v(" "),a("ul",[a("li",[t._v("网卡接收数据后, 将数据写入内存")])]),t._v(" "),a("h3",{attrs:{id:"中断信号通知-cpu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中断信号通知-cpu"}},[t._v("#")]),t._v(" 中断信号通知 CPU")]),t._v(" "),a("ul",[a("li",[t._v("网卡将数据写入内存后, "),a("strong",[t._v("网卡向 CPU 发出一个中断信号, 内核就能知道有新数据到来")]),t._v(", 再通过\n"),a("strong",[t._v("网卡中断程序")]),t._v("去处理数据")])]),t._v(" "),a("blockquote",[a("p",[t._v("中断")]),t._v(" "),a("ul",[a("li",[t._v("计算机执行程序时, 会有优先级要求. 由硬件产生的信号需要 CPU 立刻做出回应, 优先级很高.")]),t._v(" "),a("li",[t._v("CPU 接收到中断信后后, 会立刻中断掉正在执行的程序, 做出响应; 当 CPU 完成对硬件的响应后,\n再重新执行用户程序.")]),t._v(" "),a("li",[t._v("中断的位置由信号决定")]),t._v(" "),a("li",[a("strong",[t._v("中断程序调用")]),a("br"),a("img",{attrs:{src:t.$withBase("/image/network/socket-api/001_epoll_interrupt.webp"),alt:"中断程序调用"}})])])]),t._v(" "),a("h3",{attrs:{id:"操作系统进程调度处理数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作系统进程调度处理数据"}},[t._v("#")]),t._v(" 操作系统进程调度处理数据")]),t._v(" "),a("ul",[a("li",[t._v("阻塞是进程调度的关键一环, 指的是进程在等待某事件(如接收到网络数据) 发生之前的等待状态,\n"),a("code",[t._v("recv()")]),t._v(", "),a("code",[t._v("select()")]),t._v(", "),a("code",[t._v("epoll()")]),t._v(" 都是阻塞方法.")])]),t._v(" "),a("h4",{attrs:{id:"为什么进程阻塞不占用-cpu-资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么进程阻塞不占用-cpu-资源"}},[t._v("#")]),t._v(" 为什么进程阻塞不占用 CPU 资源")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("工作队列")]),t._v(" "),a("ul",[a("li",[t._v("操作系统为支持多任务, 实现了进程调度功能, 会将进程分为 "),a("strong",[t._v("运行")]),t._v(" 和 "),a("strong",[t._v("等待")]),t._v(" 等几种状态\n"),a("ul",[a("li",[t._v("运行状态, 进程获得 CPU 使用权")]),t._v(" "),a("li",[t._v("等待状态, 阻塞状态")])])]),t._v(" "),a("li",[t._v("A B C 三个进程都被操作系统工作队列引用, 处于运行态, 分时执行")])]),t._v(" "),a("p",[a("strong",[t._v("工作队列")]),a("br"),a("img",{attrs:{src:t.$withBase("/image/network/socket-api/001_epoll_workqueue.webp"),alt:"工作队列"}})])]),t._v(" "),a("li",[a("p",[t._v("等待队列")]),t._v(" "),a("ul",[a("li",[t._v("当进程 A 执行到 "),a("code",[t._v("socket()")]),t._v(" 的语句时, 操作系统会创建一个由文件系统管理的 socket 对象.\n这个 socket 对象包括可发送缓冲区, 接收缓冲区, 等待队列等成员.")]),t._v(" "),a("li",[t._v("等待队列指向所有需要等待该 socket 事件的进程")]),t._v(" "),a("li",[t._v("当程序执行到 "),a("code",[t._v("recv()")]),t._v(" 时, 操作系统会将进程 A 从工作队列移动到该 socket 的等待队列中(实\n际是添加对这个进程的引用, 以便在接收到数据时获取进程对象, 将其唤醒), 此时工作队列只剩下\nB C 两个进程, 依据进程调度, CPU 会轮流执行这两个进程的程序, 不会执行A 进程. 此时\n"),a("strong",[t._v("A 进程被阻塞, 不会往下执行代码, 也不会占用 CPU 资源")])])]),t._v(" "),a("p",[a("strong",[t._v("Socket 创建")]),a("br"),a("img",{attrs:{src:t.$withBase("/image/network/socket-api/001_epoll_socket_create.webp"),alt:"Socket 创建"}})]),t._v(" "),a("p",[a("strong",[t._v("等待队列")]),a("br"),a("img",{attrs:{src:t.$withBase("/image/network/socket-api/001_epoll_waitqueue.webp"),alt:"等待队列"}})])]),t._v(" "),a("li",[a("p",[t._v("唤醒进程")]),t._v(" "),a("ul",[a("li",[t._v("当 socket 接收到数据后, 操作系统将该 socket 等待队列上的进程重新放回到工作队列, 该进程\n变为运行状态, 急促执行代码. 此时由于 socket 的接收缓冲区已经有了数据, "),a("code",[t._v("recv()")]),t._v(" 可以返\n回接收到的数据.")])]),t._v(" "),a("p",[a("strong",[t._v("唤醒进程")]),a("br"),a("img",{attrs:{src:t.$withBase("/image/network/socket-api/001_epoll_wakeup.webp"),alt:"唤醒进程"}})])])]),t._v(" "),a("p",[a("strong",[t._v("内核接收数据全过程")]),a("br"),a("img",{attrs:{src:t.$withBase("/image/network/socket-api/001_epoll_recv_data.webp"),alt:"内核接收数据全过程"}})]),t._v(" "),a("blockquote",[a("p",[t._v("操纵系统根据网络数据包中的 IP:PORT 信息, 找到对应的 socket")])]),t._v(" "),a("h2",{attrs:{id:"同时监听多个-socket-的简单方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同时监听多个-socket-的简单方法"}},[t._v("#")]),t._v(" 同时监听多个 Socket 的简单方法")]),t._v(" "),a("p",[t._v("服务器端需要管理多个客户端连接, "),a("code",[t._v("recv()")]),t._v(" 只能监视单个 socket. "),a("code",[t._v("select()")]),t._v(" 设计思想是, 预先\n传入一个 socket 列表, 如果列表中的 socket 都没有数据, 挂起进程, 直到有一个 socket 收到数\n据, 唤醒进程. 由此就能监视多个 socket.")]),t._v(" "),a("h3",{attrs:{id:"select"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select"}},[t._v("#")]),t._v(" "),a("code",[t._v("select()")])]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("socket")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AF_INET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SOCK_STREAM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" fds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  存放需要监听的socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" fds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FD_ISSET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//fds[i]的数据处理")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("ul",[a("li",[a("p",[t._v("select 流程")]),t._v(" "),a("ul",[a("li",[t._v("程序同时监视 sock1, sock2, sock3, 在调用 "),a("code",[t._v("select()")]),t._v(" 后, 操作系统把进程 A 分别加入这\n三个 socket 的等待队列中")]),t._v(" "),a("li",[t._v("当任何一个 socket 接收到数据后, 中断程序将唤起进程, 将进程从所有等待队列中移除, 加入工作\n队列")]),t._v(" "),a("li",[t._v("当进程被唤醒后, 程序需要遍历一遍 socket 列表, 获取就绪的 socket")])])]),t._v(" "),a("li",[a("p",[t._v("缺点")]),t._v(" "),a("ul",[a("li",[t._v("每次调用 "),a("code",[t._v("select()")]),t._v(" 都需将进程加入到所有监视 socket 的等待队列, 每次唤醒都需要从每个队\n列中移除. 这里涉及到两次遍历, 并且每次都要将整个 fds 列表传递给内核, 也有一定的开销. 所\n以出于效率考量, select 默认的最大监视 socket 数为 FD_SETSIZE 1024")]),t._v(" "),a("li",[t._v("进程被唤醒后, 程序并不知道哪些 socket 就绪, 需要再遍历一遍")])]),t._v(" "),a("p",[a("strong",[t._v("操作系统把进程 A 分别加入这三个 socket 的等待队列中")]),a("br"),a("img",{attrs:{src:t.$withBase("/image/network/socket-api/001_epoll_select_001.webp"),alt:"操作系统把进程 A 分别加入这三个 socket 的等待队列中"}})]),t._v(" "),a("p",[a("strong",[t._v("sock2 接收到了数据, 中断程序唤起进程 A")]),a("br"),a("img",{attrs:{src:t.$withBase("/image/network/socket-api/001_epoll_select_002.webp"),alt:"sock2 接收到了数据, 中断程序唤起进程 A"}})]),t._v(" "),a("p",[a("strong",[t._v("将进程 A 从所有等待队列中移除, 再加入到工作队列里面")]),a("br"),a("img",{attrs:{src:t.$withBase("/image/network/socket-api/001_epoll_select_003.webp"),alt:"将进程 A 从所有等待队列中移除, 再加入到工作队列里面"}})])])]),t._v(" "),a("h2",{attrs:{id:"epoll-设计思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#epoll-设计思路"}},[t._v("#")]),t._v(" epoll 设计思路")]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("socket")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AF_INET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SOCK_STREAM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" epfd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("epoll_create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("epoll_ctl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("epfd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将所有需要监听的socket添加到epfd中")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("epoll_wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("接收到数据的socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//处理")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h3",{attrs:{id:"功能分离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能分离"}},[t._v("#")]),t._v(" 功能分离")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("select 中维护等待队列和阻塞进程两个步骤在一起, 每次调用都需要执行这两步操作.")])]),t._v(" "),a("li",[a("p",[t._v("epoll 使用 "),a("code",[t._v("epoll_ctl()")]),t._v(" "),a("strong",[t._v("维护等待队列")]),t._v(", 再调用 "),a("code",[t._v("epoll_wait()")]),t._v(" "),a("strong",[t._v("阻塞进程")]),t._v(", 将这\n两个步骤分开, 提升了效率")]),t._v(" "),a("p",[a("strong",[t._v("select epoll 对比")]),a("br"),a("img",{attrs:{src:t.$withBase("/image/network/socket-api/001_epoll_select_epoll.webp"),alt:"select epoll 对比"}})])])]),t._v(" "),a("h3",{attrs:{id:"就绪列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#就绪列表"}},[t._v("#")]),t._v(" 就绪列表")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("select 中程序不知道哪些 socket 收到数据, 需要遍历")])]),t._v(" "),a("li",[a("p",[t._v("epoll 中, 内核维护一个就绪列表 rdlist, 引用收到数据的 socket, 当进程被唤醒后, 只要获取\nrdlist 内容, 就能够知道哪些 socket 收到数据")]),t._v(" "),a("p",[a("strong",[t._v("就绪列表")]),a("br"),a("img",{attrs:{src:t.$withBase("/image/network/socket-api/001_epoll_rdlist.webp"),alt:"就绪列表"}})])])]),t._v(" "),a("h2",{attrs:{id:"epoll-原理和流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#epoll-原理和流程"}},[t._v("#")]),t._v(" epoll 原理和流程")]),t._v(" "),a("h3",{attrs:{id:"创建-epoll-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-epoll-对象"}},[t._v("#")]),t._v(" 创建 epoll 对象")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("进程调用 "),a("code",[t._v("epoll_create()")]),t._v(" 时, 内核会创建一个 eventpoll 对象(即 epfd 指向的对象).\neventpoll 是文件系统中的一员, 有自己的等待队列")])]),t._v(" "),a("li",[a("p",[t._v("每一个 epoll 对象都有一个独立的 eventpoll 结构体, 用于存放通过 "),a("code",[t._v("epoll_ctl()")]),t._v(" 添加进来\n的事件. 这些事件都挂载在红黑树上, 重复添加事件时可以通过红黑树高效识别出来(红黑树插入效率\nlgN, N 为树的高度)")]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("eventpoll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 红黑树的根节点, 这颗树中存储着所有添加到 epoll 中的需要监控的事件")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("rb_root")]),t._v("  rbr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 双链表中则存放着将要通过 epoll_wait 返回给用户的满足条件的事件")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("list_head")]),t._v(" rdlist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[a("strong",[t._v("内核创建 eventpoll 对象")]),a("br"),a("img",{attrs:{src:t.$withBase("/image/network/socket-api/001_epoll_create_eventpoll.webp"),alt:"内核创建 eventpoll 对象"}})])])]),t._v(" "),a("h3",{attrs:{id:"维护监视列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#维护监视列表"}},[t._v("#")]),t._v(" 维护监视列表")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("创建 epoll 对象后, 可以使用 "),a("code",[t._v("epoll_ctl()")]),t._v(" 管理所要监听的 socket, 内核会将 eventpoll\n添加到对应 socket 的等待队列, 或从所在的 socket 等待队列删除")])]),t._v(" "),a("li",[a("p",[t._v("当 socket 收到数据后, 中断程序会操作 eventpoll 对象, 而不是直接操作进程")]),t._v(" "),a("ul",[a("li",[t._v("所有添加到 epoll 的事件都会与设备网卡驱动程序建立回调关系, 当相应的事件发生时会调用这个\n回调方法. 这个回调方法在内核中叫 "),a("code",[t._v("ep_poll_callback")]),t._v(", 会将发生的事件添加到 rdlist 链\n表中")]),t._v(" "),a("li",[t._v("epoll 中, 对于每个事件, 都会建立一个 epitem 结构体")])]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("epitem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("rb_node")]),t._v(" rbn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//红黑树节点")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("list_head")]),t._v(" rdllink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//双向链表节点")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("epoll_filefd")]),t._v(" ffd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//事件句柄信息")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("eventpoll")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指向其所属的 eventpoll 对象")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("epoll_event")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//期待发生的事件类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[a("strong",[t._v("添加要监听的 socket")]),a("br"),a("img",{attrs:{src:t.$withBase("/image/network/socket-api/001_epoll_add_rdlist.webp"),alt:"添加要监听的 socket"}})])])]),t._v(" "),a("h3",{attrs:{id:"接收数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接收数据"}},[t._v("#")]),t._v(" 接收数据")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("socket 接收到数据后, 中断程序会给 eventpoll 的 rdlist 添加 socket 引用")])]),t._v(" "),a("li",[a("p",[t._v("eventpoll 对象相当与 socket 和进程之间的中介, socket 的数据接收并不直接影响进程, 而是通\n过改变 eventpoll 的 rdlist 来改变进程状态")])]),t._v(" "),a("li",[a("p",[t._v("当程序执行 "),a("code",[t._v("epoll_wait()")]),t._v(" 时, 如果 rdlist 已经引用了 socket, 那么 "),a("code",[t._v("epoll_wait()")]),t._v("\n直接返回, 如果 rdlist 为空则进程阻塞")]),t._v(" "),a("ul",[a("li",[t._v("调用 "),a("code",[t._v("epoll_wait()")]),t._v(" 检查是否有事件发生时, 只需要检查 eventpoll.rdlist 双链表中是否\n有 epitem 元素即可. 如果 rdlist 不为空, 则把发生的事件复制到用户态, 同时将事件数量返回\n给用户")])]),t._v(" "),a("p",[a("strong",[t._v("给 rdlist 添加引用")]),a("br"),a("img",{attrs:{src:t.$withBase("/image/network/socket-api/001_epoll_rdlist_add_reference.webp"),alt:"给 rdlist 添加引用"}})])])]),t._v(" "),a("h3",{attrs:{id:"阻塞和唤醒进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阻塞和唤醒进程"}},[t._v("#")]),t._v(" 阻塞和唤醒进程")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("程序运行到 "),a("code",[t._v("epoll_wait()")]),t._v(" 时, 进程阻塞. 此时内核会将进程放入到 eventpoll 的等待队列")])]),t._v(" "),a("li",[a("p",[t._v("socket 接收到数据后, 中断程序一方面修改 rdlist, 另一方面唤醒 eventpoll 等待队列中的进程,\n进程再次进入运行态. 进程根据 rdlist 可以知道哪些 socket 发生了变化")]),t._v(" "),a("p",[a("strong",[t._v("epoll_wait 阻塞进程")]),a("br"),a("img",{attrs:{src:t.$withBase("/image/network/socket-api/001_epoll_epoll_wait.webp"),alt:"epoll_wait 阻塞进程"}})]),t._v(" "),a("p",[a("strong",[t._v("epoll 唤醒进程")]),a("br"),a("img",{attrs:{src:t.$withBase("/image/network/socket-api/001_epoll_wakeup_process.webp"),alt:"epoll 唤醒进程"}})])])]),t._v(" "),a("h2",{attrs:{id:"epoll-实现细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#epoll-实现细节"}},[t._v("#")]),t._v(" epoll 实现细节")]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("eventpoll")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  wait_queue_head_t wq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  wait_queue_head_t poll_wait"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("list_head")]),t._v(" rdllist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("rb_root")]),t._v(" rbr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("epitem")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ovflist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fd对应的文件表入口")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("epitem")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("union")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("rb_node")]),t._v(" rbn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("list_head")]),t._v(" rdllink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("epitem")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("epoll_filefd")]),t._v(" ffd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("list_head")]),t._v(" pwqlist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("eventpoll")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("list_head")]),t._v(" fllink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("epoll_event")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("ul",[a("li",[a("p",[t._v("rdlist")]),t._v(" "),a("ul",[a("li",[t._v("双向链表, 快速插入和删除")]),t._v(" "),a("li",[t._v("rdlist 通过 epitem 间接引用 socket")])])]),t._v(" "),a("li",[a("p",[t._v("索引结构")]),t._v(" "),a("ul",[a("li",[t._v("红黑树, 快速添加, 删除, 搜索")]),t._v(" "),a("li",[t._v("保存监视的 socket")])]),t._v(" "),a("p",[a("strong",[t._v("epoll 原理")]),a("br"),a("img",{attrs:{src:t.$withBase("/image/network/socket-api/001_epoll_datastructure.webp"),alt:"epoll 原理"}})])])]),t._v(" "),a("p",[a("em",[a("strong",[t._v("Q. 为什么能支持百万句柄如此高效?")])])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("不用重复传递")]),t._v(", 调用 "),a("code",[t._v("epoll_wait()")]),t._v(" 就相当于调用 "),a("code",[t._v("selelct/poll")]),t._v(", 但此时不用传递\nsocket 句柄给内核, 因为内核已经在 "),a("code",[t._v("epoll_ctl()")]),t._v(" 中拿到了要监控的句柄列表")]),t._v(" "),a("li",[t._v("内核中, 一切皆文件. epoll 向内核注册了一个文件系统, 用于存储被监控的 socket. 当调用\n"),a("code",[t._v("epoll_create()")]),t._v(" 时, 就会在这个虚拟的 epoll 文件系统中创建一个 file 节点, 这个节点\n不时普通的文件, 只服务于 epoll. epoll 在被内核初始化时, 同时会开辟出 epoll 自己的内核\n高速 cache, 用于存放每一个想要监控的 socket, 这些 socket 会以红黑树的形式保存在内存\ncache 中, 以支持快速的查抄, 删除, 插入. 所以在内存上分配好想要的 size 的内存对象, 每次\n使用时都是使用空闲的已分配好的对象")]),t._v(" "),a("li",[t._v("高效原因. 内核除了在 epoll 文件系统中创建 file 节点, 在内核 cache 中建立红黑树以存储后\n续 "),a("code",[t._v("epoll_ctl()")]),t._v(" 传来的 socket 外, 还会再建一个 list 链表, 用于存储准备就绪的事件,\n"),a("code",[t._v("epoll_wait()")]),t._v(" 时, 仅仅观察这个 list 链表里有没有数据即可. 有数据就返回, 没有数据就\nsleep, 等到 timeout 时间到后即使链表没有数据也返回.\n"),a("ul",[a("li",[t._v("rdlist 维护. "),a("strong",[t._v("epoll 的基础就是回调")]),t._v(". 执行 "),a("code",[t._v("epoll_ctl()")]),t._v(" 时, 除了把 socket 放到\nepoll 文件系统里 file 对象对应的红黑树上, 还会给内核中断处理程序注册一个回调函数, 使得\n内核在这个句柄中断到了时, 将它放到准备就绪 rdlist 里. 所以当一个 socket 上有数据时,\n内核把网卡上的数据 copy 到内核中后, 就会将 socket 插入到 rdlist 中.")])])]),t._v(" "),a("li",[t._v("总结下流程\n"),a("ol",[a("li",[a("code",[t._v("epoll_create()")]),t._v(" 创建红黑树和 rdlist")]),t._v(" "),a("li",[a("code",[t._v("epoll_ctl()")]),t._v(" 增加 socket 句柄时, 检查红黑树中是否存在, 存在就立即返回, 不存在则添加\n到树干上; 然后向内核注册回调函数, 用于当中断事件来临时向 rdlist 中插入数据")]),t._v(" "),a("li",[a("code",[t._v("epoll_wait()")]),t._v(" 立刻返回 rdlist 中的数据")])])])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/63179839",target:"_blank",rel:"noopener noreferrer"}},[t._v("如果这篇文章说不清 epoll 的本质, 那就过来掐死我吧!"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.cnblogs.com/charlesblc/p/6242479.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("epoll的内部实现 & 百万级别句柄监听 & lt和et模式非常好的解释"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);