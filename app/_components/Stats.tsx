const statistics = [
    {
        title: 'Investment Teams',
        value: "15"
    },
    {
        title: 'Startups Added',
        value: "2k"
    },
    {
        title: 'Hrs Saved Weekly',
        value: "720"
    }
]

const Stats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-40 items-center justify-evenly text-white">
            {statistics.map((stat, index) => {
                return (
                    <div key={index} className=" flex flex-col items-center justify-center">
                        <div className="lg:text-8xl text-8xl sm:text-6xl font-bold">
                            {stat.value}
                            <span>+</span>
                        </div>
                        <div className="lg:text-2xl sm:text-lg text-2xl text-center font-medium pt-5">
                            {stat.title}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Stats;