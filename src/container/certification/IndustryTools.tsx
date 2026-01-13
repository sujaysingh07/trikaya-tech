import Image from "next/image";

const tools = [
    { name: "Python", icon: "/tools/python.svg" },
    { name: "Pandas", icon: "/tools/pandas.png" },
    { name: "Sklearn", icon: "/tools/Sklearn.png" },
    { name: "Kafka", icon: "/tools/kafka.png" },
    { name: "MySQL", icon: "/tools/mysql.png" },
    { name: "Python", icon: "/tools/python.svg" },
    { name: "Pandas", icon: "/tools/pandas.png" },
    { name: "Sklearn", icon: "/tools/Sklearn.png" },
    { name: "Kafka", icon: "/tools/kafka.png" },
    { name: "MySQL", icon: "/tools/mysql.png" },
    { name: "Python", icon: "/tools/python.svg" },
    { name: "Pandas", icon: "/tools/pandas.png" },
    { name: "Sklearn", icon: "/tools/Sklearn.png" },
    { name: "Kafka", icon: "/tools/kafka.png" },
    { name: "MySQL", icon: "/tools/mysql.png" },
    { name: "Python", icon: "/tools/python.svg" },
    { name: "Pandas", icon: "/tools/pandas.png" },
    { name: "Sklearn", icon: "/tools/Sklearn.png" },
    { name: "Kafka", icon: "/tools/kafka.png" },
    { name: "MySQL", icon: "/tools/mysql.png" },
    { name: "Python", icon: "/tools/python.svg" },
    { name: "Pandas", icon: "/tools/pandas.png" },
    { name: "Sklearn", icon: "/tools/Sklearn.png" },
    { name: "Kafka", icon: "/tools/kafka.png" },
    { name: "MySQL", icon: "/tools/mysql.png" },
    { name: "Python", icon: "/tools/python.svg" },
    { name: "Pandas", icon: "/tools/pandas.png" },
    { name: "Sklearn", icon: "/tools/Sklearn.png" },
    { name: "Kafka", icon: "/tools/kafka.png" },
    { name: "MySQL", icon: "/tools/mysql.png" },
    { name: "Python", icon: "/tools/python.svg" },
    { name: "Pandas", icon: "/tools/pandas.png" },
    { name: "Sklearn", icon: "/tools/Sklearn.png" },
    { name: "Kafka", icon: "/tools/kafka.png" },
    { name: "MySQL", icon: "/tools/mysql.png" },
    { name: "Python", icon: "/tools/python.svg" },

];

export default function IndustryTools() {
    return (
        <section className="w-full">
            {/* Heading */}
            <h2 className="mb-7 text-2xl font-bold text-black">
                Master 80+ Essentials Industry Tools
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-4 gap-x-8 gap-y-4 sm:grid-cols-6 md:grid-cols-13 lg:grid-cols-13">
                {tools.map((tool, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-[#cccccc] bg-white p-1.5">
                            <Image
                                src={tool.icon}
                                alt={tool.name}
                                className=" object-contain"
                                width={100}
                                height={100}
                            />
                        </div>

                        <p className="mt-0.5 text-[22px] font-semibold text-black">
                            {tool.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
