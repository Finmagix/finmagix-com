import Link from "next/link";
import type { Post } from "@/lib/posts";
import { formatPostDate } from "@/lib/posts";
import styles from "./PostCard.module.css";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={post.url} className={styles.card}>
      {post.tags.length > 0 && (
        <div className={styles.tagRow}>
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.excerpt}>{post.excerpt}</p>
      <div className={styles.footer}>
        <span className={styles.meta}>
          <span>{post.author}</span>
          <span className={styles.metaDot} aria-hidden="true" />
          <span>{formatPostDate(post.date)}</span>
        </span>
        <span className={styles.readLink}>Read →</span>
      </div>
    </Link>
  );
}
