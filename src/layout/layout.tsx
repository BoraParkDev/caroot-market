import classNames from "classnames";
import Home from "@/assets/common/ico_home.svg";
import News from "@/assets/common/ico_news.svg";
import Chats from "@/assets/common/ico_chat_msg.svg";
import Stream from "@/assets/common/ico_stream.svg";
import User from "@/assets/common/ico_user.svg";
import Link from "next/link";

export type LayoutProps = {
  title?: string;
  canGoBack?: boolean;
  hasTabs?: boolean;
  children: React.ReactNode;
};

const Layout = ({ ...props }: LayoutProps) => {
  return (
    <div>
      <div className="bg-white max-w-lg w-full py-3 text-lg font-medium fixed text-gray-900 border-b top-0 flex items-center justify-center">
        {props.title ? <span>{props.title}</span> : null}
      </div>
      <div className="py-10">{props.children}</div>
      {props.hasTabs ? (
        <nav className="bg-white max-w-lg text-gray-700 border-t fixed bottom-0 w-full px-10 pb-5 pt-24 flex justify-between text-xs">
          <ul className="py-2 space-y-2 w-full flex justify-between items-center content-center text-center">
            <li className="w-1/5 mx-auto cursor-pointer">
              <Link href="/">
                <Home
                  className="w-6 h-6 mx-auto"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <span>홈</span>
              </Link>
            </li>
            <li className="w-1/5 mx-auto cursor-pointer">
              <Link href="/community">
                <News
                  className="w-6 h-6 mx-auto"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <span>동네생활</span>
              </Link>
            </li>
            <li className="w-1/5 mx-auto cursor-pointer">
              <Link href="/chats">
                <Chats
                  className="w-6 h-6 mx-auto"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <span>채팅</span>
              </Link>
            </li>
            <li className="w-1/5 mx-auto cursor-pointer">
              <Link href="/stream">
                <Stream
                  className="w-6 h-6 mx-auto"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <span>라이브</span>
              </Link>
            </li>
            <li className="w-1/5 mx-auto cursor-pointer">
              <Link href="/profile">
                <User
                  className="w-6 h-6 mx-auto"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <span>나의 당근보기</span>
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};

export default Layout;
