import React from 'react';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ElementType;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}