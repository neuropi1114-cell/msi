import Blogs from '../home/Blogs';

export default function RecentNews() {
  return (
    <section className="py-20 bg-[#f7f9fc]">
      <div className="container mx-auto px-4 md:px-12 text-center">
        <h2 className="mb-2 text-msi-purple">Recent News</h2>
        <p className="text-gray-500 mb-10">What&rsquo;s Going on in our Blog?</p>
        <Blogs />
      </div>
    </section>
  );
}