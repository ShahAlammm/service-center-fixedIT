
const BlogPage = () => {
  const blogData = {
    title: 'Revolutionizing Product Repair with FixedIT',
    author: 'Jane Smith',
    date: 'December 10, 2023',
    content: `
      <p>Welcome to the exciting world of FixedIT, where repair service is redefined for efficiency and convenience.</p>
      <p>In this blog post, we'll explore the key features that make Delivery Express stand out in the crowded delivery app market.</p>
      <br/>
      <h2}>User-Friendly Navigation :</h2$>

      <p>Our app boasts a sleek and intuitive navigation bar, providing users with easy access to essential features. The dynamic navbar adapts to the user's status, showing profile information for logged-in users.</p>
      <br/>
      <h2>Features Showcase :</h2>

      <p>The Features Section highlights the app's strengths, showcasing aspects like Parcel Safety and Super Fast Delivery through visually appealing cards. Real-time statistics, powered by the react-countup package, offer insights into app usage.</p>
      <br/>
      <h2>Top Delivery Men Recognition :</h2>

      <p>We recognize the dedication of our delivery personnel with the Top Delivery Men Section, displaying the top performers based on delivered parcels and average ratings.</p>
      <br/>
      <h2>Login and Registration System :</h2>

      <p>Our secure login and registration system ensure a seamless onboarding experience. Users can register as standard users or delivery personnel, with admin accounts managed manually for enhanced security. Social login options provide a quick and secure access alternative.</p>
      <br/>
      <!-- ... (Continue with other sections) -->
    `,
  };

  return (
    <div className="container m-auto py-24 xl:py-44 ">
        <div className="blog-page ">
      <article className="space-y-10">
        <h1 className="text-5xl font-bold">{blogData.title}</h1>
        <p className="meta text-3xl font-bold">
          By {blogData.author} on {blogData.date}
        </p>
        <div className="text-2xl font-semibold" dangerouslySetInnerHTML={{ __html: blogData.content }} />
      </article>
    </div>
    </div>
  );
};

export default BlogPage;
