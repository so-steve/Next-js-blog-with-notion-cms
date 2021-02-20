import Link from "next/link";
import { Card, Image, Text } from "@geist-ui/react";

export default function StoryCard({ posts }) {
  return (
    <div className="container pt-4">
      <div className="row">
        {posts.map((post) => (
          <div key={post.slug} className="col-md-6 col-12 pb-5 pb-md-5">
            <Link href={"posts/" + post.slug}>
              <a>
                <Card hoverable>
                  <Image
                    src={post.coverImage}
                    height="300"
                    style={{ objectFit: "cover" }}
                  />
                  <Text h4 style={{ marginBottom: "0" }}>
                    {post.title}
                  </Text>
                </Card>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
