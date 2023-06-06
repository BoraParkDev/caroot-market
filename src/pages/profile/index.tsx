import {NextPage} from "next";
import Cart from "@/assets/pages/profile/ico_cart.svg";
import Buy from "@/assets/pages/profile/ico_buy.svg";
import Like from "@/assets/pages/profile/ico_like.svg";
import Star from "@/assets/pages/profile/ico_start.svg";

const Profile: NextPage = () => {
	const stars = new Array(4).fill(1);
	return (
		<div className="py-10 px-4">
			<div className="flex items-center space-x-3">
				<div className="w-16 h-16 rounded-full bg-slate-300"/>
				<div className="flex flex-col">
					<span className="font-medium text-gray-900">Steve Jebs</span>
					<span className="text-sm text-gray-700">Edit profile &rarr;</span>
				</div>
			</div>
			<div className="mt-10 flex justify-around">
				<div className="flex flex-col items-center cursor-pointer">
					<div className="w-14 h-14 rounded-full bg-orange-400 text-white flex items-center justify-center">
						<Cart
							className="w-6 h-6"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
						/>
					</div>
					<span className="mt-2 text-sm font-medium text-gray-700">
            판매내역
          </span>
				</div>
				<div className="flex flex-col items-center cursor-pointer">
					<div className="w-14 h-14 rounded-full bg-orange-400 text-white flex items-center justify-center">
						<Buy
							className="w-6 h-6"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
						/>
					</div>
					<span className="mt-2 text-sm font-medium text-gray-700">
            구매내역
          </span>
				</div>
				<div className="flex flex-col items-center cursor-pointer">
					<div className="w-14 h-14 rounded-full bg-orange-400 text-white flex items-center justify-center">
						<Like className="w-6 h-6"
						      strokeLinecap="round"
						      strokeLinejoin="round"
						      strokeWidth="2"/>
					</div>
					<span className="mt-2 text-sm font-medium text-gray-700">
            관심목록
          </span>
				</div>
			</div>
			<div className="mt-12">
				<div className="flex space-x-4 items-center">
					<div className="w-12 h-12 rounded-full bg-slate-300"/>
					<div>
						<h4 className="text-sm font-bold text-gray-950">rachel</h4>
						<div className="flex items-center">
							{stars.map((_, i) => <Star key={i} className="text-yellow-400 h-5 w-5"
							/>)}
							<Star className="text-gray-400 h-5 w-5"/>
						</div>
					</div>
				</div>
				<div className="mt-4 text-gray-600 text-sm">
					<p>
						Normally, both your asses would be dead as fucking fried chicken,
						but you happen to pull this shit while I&apos;m in a transitional
						period so I don&apos;t wanna kill you, I wanna help you. But I
						can&apos;t give you this case, it don&apos;t belong to me. Besides,
						I&apos;ve already been through too much shit this morning over this
						case to hand it over to your dumb ass.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
