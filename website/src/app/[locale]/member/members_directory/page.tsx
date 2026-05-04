import MembershipHero from "../../../../components/membership/Hero"
import MembersDirectory from "../../../../components/membership/MembersDirectory"

export default function MembersDirectoryPage() {
  return (
    <>
      <MembershipHero navKey="members_directory" />
      <MembersDirectory />
    </>
  )
}
