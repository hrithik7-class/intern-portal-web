import { Crown, Medal, Trophy, Award, TrendingUp} from 'lucide-react';


const Score = () => {
    const data = [
        {
            rank: 1,
            name: 'Rahul',
            code: 'RAHUL2025',
            total: 5178,
            avatar: 'R',
            gradient: 'from-yellow-400 via-yellow-500 to-yellow-600',
            achievement: 'Champion',
            achievementIcon: <Trophy className="text-yellow-400" size={16} />,
            status: 'Leading',
            statusDot: 'bg-green-500 animate-pulse',
            statusIcon: <TrendingUp className="text-green-500" size={16} />,
            avatarBg: 'from-purple-500 to-pink-600',
            border: 'border-l-yellow-400',
            progress: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
            progressWidth: '100%',
        },
        {
            rank: 2,
            name: 'Suteekshn',
            code: 'suteekshn2025',
            total: 4640,
            avatar: 'S',
            gradient: 'from-gray-300 via-gray-400 to-gray-500',
            achievement: 'Runner-up',
            achievementIcon: <Medal className="text-blue-400" size={16} />,
            status: 'Elite',
            statusDot: 'bg-yellow-500',
            statusIcon: <Award className="text-blue-500" size={16} />,
            avatarBg: 'from-red-500 to-orange-600',
            border: 'border-l-yellow-400',
            progress: 'bg-gradient-to-r from-gray-400 to-gray-600',
            progressWidth: '89.6%',
        },
        {
            rank: 3,
            name: 'Mezz',
            code: 'Mezz2025',
            total: 4040,
            avatar: 'M',
            gradient: 'from-yellow-300 via-yellow-400 to-yellow-500',
            achievement: 'Third',
            achievementIcon: <Medal className="text-gray-400" size={16} />,
            status: '2nd Runner-up',
            statusDot: 'bg-yellow-500',
            statusIcon: <Award className="text-blue-500" size={16} />,
            avatarBg: 'from-red-500 to-orange-600',
            border: 'border-l-yellow-400',
            progress: 'bg-gradient-to-r from-gray-400 to-gray-600',
            progressWidth: '79.6%',
        },
        {
            rank: 4,
            name: 'Susan',
            code: 'Susan2025',
            total: 4000,
            avatar: 'D',
            gradient:'from-gray-300 via-gray-400 to-gray-500',
            achievement: 'Top-5',
            achievementIcon: <Medal className="text-gray-400" size={16} />,
            status: 'Top 5',
            statusDot: 'bg-yellow-500',
            statusIcon: <Award className="text-blue-500" size={16} />,
            avatarBg: 'from-red-500 to-orange-600',
            border: 'border-l-yellow-400',
            progress: 'bg-gradient-to-r from-gray-400 to-gray-600',
            progressWidth: '74.6%',
        },
        {
            rank: 5,
            name: 'Nohn',
            code: 'Nohn2025',
            total: 3840,
            avatar: 'L',
            gradient: 'from-gray-300 via-gray-400 to-gray-500',
            achievement: 'Top-5',
            achievementIcon: <Medal className="text-gray-400" size={16} />,
            status: 'Top 5',
            statusDot: 'bg-yellow-500',
            statusIcon: <Award className="text-blue-500" size={16} />,
            avatarBg: 'from-red-500 to-orange-600',
            border: 'border-l-yellow-400',
            progress: 'bg-gradient-to-r from-gray-400 to-gray-600',
            progressWidth: '70.6%',
        },
        {
            rank: 6,
            name: 'John',
            code: 'John2025',
            total: 3540,
            avatar: 'J',
            gradient: 'from-gray-300 via-gray-400 to-gray-500',
            achievement: 'Normal',
            achievementIcon: <Medal className="text-gray-400" size={16} />,
            status: 'Normal',
            statusDot: 'bg-yellow-500',
            statusIcon: <Award className="text-blue-500" size={16} />,
            avatarBg: 'from-red-500 to-orange-600',
            border: 'border-l-yellow-400',
            progress: 'bg-gradient-to-r from-gray-400 to-gray-600',
            progressWidth: '65.6%',
        },
    ];
    return (
        <div className='flex flex-col justify-center bg-white rounded-xl shadow-md '>
            <div className='flex flex-col gap-2 bg-gradient-to-tr from-violet-500/80 to-blue-500/80
           w-full rounded-l-xl rounded-bl-none rounded-t-xl p-4'>
                <div className='flex justify-start items-center gap-2 p-3 text-white '>
                    <Trophy className='text-yellow-400/70 size-8' />
                    <h3 className='text-2xl font-bold '>Top Fundraisers</h3>
                </div>
                <p className='text-sm text-white sm:text-start text-center font-serif ml-3'>Rankings based on total donations raised</p>
            </div>

            <div className='flex flex-col  gap-1  text-black w-full  '>

                <div className="overflow-x-auto rounded-xl shadow-md bg-white">
                    <table className="min-w-[700px] w-full">
                        <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                            <tr>
                                <th className="px-8 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Rank</th>
                                <th className="px-8 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Intern</th>
                                <th className="px-8 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Referral Code</th>
                                <th className="px-8 py-4 text-right text-sm font-bold text-gray-700 uppercase tracking-wider">Total Raised</th>
                                <th className="px-8 py-4 text-center text-sm font-bold text-gray-700 uppercase tracking-wider">Achievement</th>
                                <th className="px-8 py-4 text-center text-sm font-bold text-gray-700 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-violet-300">
                            {data.map((row, idx) => (
                                <tr
                                    key={idx}
                                    className={`bg-gradient-to-r ${row.gradient} border-orange-200 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg border-l-4 ${row.border}`}
                                >
                                    <td className="px-8 py-6 whitespace-nowrap">
                                        <div className="flex items-center space-x-3">
                                            <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg bg-gradient-to-r ${row.gradient} text-white shadow-lg`}>
                                                {row.rank}
                                            </div>
                                            <div>{row.rank === 1 ? <Crown className="text-yellow-500" size={20} /> : row.achievementIcon}</div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 relative">
                                                <div className={`h-12 w-12 rounded-full bg-gradient-to-r ${row.avatarBg} flex items-center justify-center border-2 border-white shadow-lg`}>
                                                    <span className="text-white font-bold text-lg">{row.avatar}</span>
                                                </div>
                                                {row.rank === 1 && (
                                                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                                                        <Crown className="text-yellow-800" size={12} />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-lg font-bold text-gray-900 flex items-center">{row.name}</div>
                                                <div className="text-sm text-gray-500 flex items-center mt-1">
                                                    {row.statusIcon}
                                                    <span className="ml-1">{row.achievement}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 whitespace-nowrap">
                                        <div className="text-sm text-gray-900 font-mono bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-2 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                                            {row.code}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 whitespace-nowrap text-right">
                                        <div className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                            ${row.total.toLocaleString()}
                                        </div>
                                        <div className="text-sm font-medium text-gray-600 mt-1">
                                            {row.achievementIcon} {row.achievement}
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                            <div className={`h-2 rounded-full transition-all duration-1000 ${row.progress}`} style={{ width: row.progressWidth }}></div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 whitespace-nowrap text-center">
                                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg transform hover:scale-105 transition-transform">
                                            {row.achievementIcon} {row.achievement}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 whitespace-nowrap text-center">
                                        <div className="flex flex-col items-center space-y-1">
                                            <div className={`w-3 h-3 rounded-full ${row.statusDot}`}></div>
                                            <span className="text-xs text-gray-600 font-medium">{row.status}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='flex justify-between sm:p-6  p-3 shadow-md  rounded-br-xl rounded-bl-xl '>
                <span className='sm:text-sm text-[12px]  sm:font-bold font-normal text-gray-400 '>Showing Top 6 fundraises</span>

                <span className='flex justify-center text-xs items-center gap-2 sm:gap-5 text-gray-800/80'>
                    <span className="flex sm:gap-2">
                        <Crown className='text-yellow-400' /> <span className='text-xs font-semibold'>1St Place</span>
                    </span>

                    <span className="flex sm:gap-2">
                        <Medal className='text-slate-400' /> <span className='text-xs font-semibold'>2nd Place</span>
                    </span>

                    <span className="flex sm:gap-2">
                        <Trophy className='text-orange-400' /> <span className='text-xs font-semibold'>3rd Place</span>
                    </span>
                </span>
            </div>

        </div>
    )
}

export default Score
