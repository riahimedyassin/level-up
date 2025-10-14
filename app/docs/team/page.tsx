import Image from "next/image";

const teamMembers = [
  {
    name: "Riahi Med Yassin",
    title: "Vice President",
    imageUrl:
      "yassin.jpg",
  },
  {
    name: "Hamza Chouaia",
    title: "President",
    imageUrl: "hamza.jpg",
  },
  {
    name: "Selim Trabelsi",
    title: "Treasurer & Finances Ops",
    imageUrl: "selim.jpg",
  },
  {
    name: "Youssef Zawali",
    title: "Executive Directo",
    imageUrl: "youssef.jpg",
  },
  {
    name: "Chaddy ",
    title: "PR Manager & General Secretary",
    imageUrl:
      "chaddy.jpg",
  },
  {
    name: "Ayoub Ben Hmida",
    title: "Monitoring & Evaluation",
    imageUrl: "ayoub.jpg",
  },
];
const Team01Page = () => {
  return (
    <div className="flex flex-col items-center justify-center py-14 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tighter">
          Meet Our Team
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground">
          Together, we are didicated to change our Tunisia.
        </p>
      </div>

      <div className="mt-20 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-12 max-w-(--breakpoint-lg) mx-auto">
        {teamMembers.map((member) => (
          <div key={member.name} className="text-center">
            <Image
              src={`/${member.imageUrl}`}
              alt={member.name}
              className="h-20 w-20 rounded-full object-cover mx-auto bg-secondary"
              width={120}
              height={120}
            />
            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-muted-foreground">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team01Page;
